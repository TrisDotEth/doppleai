import type { QueryResolvers } from 'types/graphql'

import helloWorld from 'src/defer/helloWorld'
import { db } from 'src/lib/db'

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
  console.log('latestThought', latestThought)
  if (latestThought) {
    return latestThought
  } else {
    input.usedAsPost = false
    const newThought = await generateAction({ input })
    return db.thought.create({
      data: newThought,
    })
  }
}

export const refreshThought: MutationResolvers['refreshThought'] = async ({
  input,
}) => {
  console.log('Refresh Fired')
  console.log(input)
  await helloWorld('Charly')

  input.usedAsPost = false
  const newThought = await generateAction({ input })
  console.log('New thought is - ', newThought)
  return db.thought.create({
    data: newThought,
  })
}
