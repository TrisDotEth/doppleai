import { delay } from '@defer/client'
import type { QueryResolvers } from 'types/graphql'

import helloWorld from 'src/defer/helloWorld'
import { db } from 'src/lib/db'
import { randomTime } from 'src/lib/randomTime'

import { generateAction } from '../generateAction/generateAction'

export const thought: QueryResolvers['thought'] = async () => {
  const user = context.currentUser.id
  console.log('Thought Fired')
  const latestThought = await db.thought.findFirst({
    where: {
      user: user,
      reply: null,
      usedAsPost: false,
    },
    orderBy: [
      {
        id: 'desc',
      },
    ],
  })
  // const inputUpdatedWithPost = await generateAction({ input })
  // debugger;
  console.log('Thought loaded is - ', latestThought)
  return latestThought
}

export const createThought: MutationResolvers['createThought'] = async ({
  input,
}) => {
  const latestThought = await db.thought.findFirst({
    where: {
      user: input.user,
      reply: null,
      usedAsPost: false,
    },
    orderBy: [
      {
        id: 'desc',
      },
    ],
  })
  console.log('latestThought in createThought', latestThought)
  if (latestThought) {
    return latestThought
  } else {
    input.usedAsPost = false
    const newThought = await generateAction({ input })
    //Adda random time for the next thought
    newThought.whenWillPost = randomTime()
    return db.thought.create({
      data: newThought,
    })
  }
}

export const refreshThought: MutationResolvers['refreshThought'] = async ({
  input,
}) => {
  console.log('Refresh Fired')
  // console.log(input)

  // const latestThought = await db.thought.findFirst()
  // console.log('latestThought in refresh', latestThought)

  // const defer = delay(helloWorld({ input: input }), '5m')
  // console.log('latestThought returned from defer', defer)
  const profile = await db.profile.findUnique({
    where: {
      user: input.user,
    },
    include: {
      attributes: true,
      prompts: true,
    },
  })

  const olderThought = await db.thought.findFirst({
    where: {
      user: input.user,
      usedAsPost: false,
    },
  })

  const updateOldThought = await db.thought.update({
    where: {
      id: olderThought.id, // Replace <THOUGHT_ID> with the ID of the thought you want to update
    },
    data: {
      discarded: true,
    },
  })

  console.log(updateOldThought)

  input.usedAsPost = false
  const newThought = await generateAction({ input, profile })
  console.log('New thought is - ', newThought)
  //Add a random time for the next thought
  newThought.whenWillPost = randomTime()
  return db.thought.create({
    data: newThought,
  })
}

export const postReadyThoughts: MutationResolvers['postReadyThoughts'] =
  async () => {
    console.log('postReadyThoughts fired')
    const readyThoughts = await db.thought.findMany({
      where: {
        usedAsPost: false,
        discarded: false,
        whenWillPost: {
          lte: new Date(),
        },
      },
    })
    // debugger
    //guard clause if there are no readyThoughts
    if (readyThoughts.length === 0) {
      return false
    }

    console.log('readyThoughts', readyThoughts)
    // debugger
    // Create an array of Promises for each update operation
    const updatePromises = readyThoughts.map((thought) => {
      return db.thought.update({
        where: {
          id: thought.id,
        },
        data: {
          usedAsPost: true,
        },
      })
    })
    // Execute all update operations concurrently using Promise.all()
    const updatedThoughts = await Promise.all(updatePromises)
    console.log('updatedThoughts', updatedThoughts)
    // debugger

    // Map the readyThoughts into an array of post objects
    const thoughtsToPost = []
    readyThoughts.forEach((thought) => {
      delete thought.id
      delete thought.discarded
      thoughtsToPost.push(thought)
    })
    // debugger

    // Create the posts in the database
    await db.post.createMany({
      data: thoughtsToPost,
    })
    // debugger
    return true
  }
