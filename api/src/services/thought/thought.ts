import { delay } from '@defer/client'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import helloWorld from 'src/defer/helloWorld'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
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
  const profile = await db.profile.findUnique({
    where: {
      user: input.user,
    },
    include: {
      attributes: true,
      prompts: true,
    },
  })
  //maybe passing in the old thought ID would be better. Security though.
  const olderThought = await db.thought.findFirst({
    where: {
      user: input.user,
      usedAsPost: false,
      discarded: false,
    },
    orderBy: [
      {
        id: 'desc',
      },
    ],
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

// export const postReadyThoughtsOld: MutationResolvers['postReadyThoughtsOld'] =
//   async () => {
//     //todo so many db calls...
//     console.log('postReadyThoughts fired')
//     const readyThoughts = await db.thought.findMany({
//       where: {
//         usedAsPost: false,
//         discarded: false,
//         whenWillPost: {
//           lte: new Date(),
//         },
//       },
//     })

//     console.log('thought.ts - readyThoughts', readyThoughts)
//     // debugger
//     // return
//     //guard clause if there are no readyThoughts
//     if (readyThoughts.length === 0) {
//       console.log('No readyThoughts found', readyThoughts)
//       return false
//     }

//     // Create an array of Promises for each update operation
//     const updatePromises = readyThoughts.map((thought) => {
//       return db.thought.update({
//         where: {
//           id: thought.id,
//         },
//         data: {
//           usedAsPost: true,
//         },
//       })
//     })

//     console.log('updatePromises', updatePromises)
//     // Execute all update operations concurrently using Promise.all()
//     const updatedThoughts = await Promise.all(updatePromises)
//     console.log('updatedThoughts', updatedThoughts)
//     // debugger

//     // Map the readyThoughts into an array of post objects
//     const thoughtsToPost = []
//     readyThoughts.forEach((thought) => {
//       delete thought.id
//       delete thought.discarded
//       delete thought.createdAt
//       thoughtsToPost.push(thought)
//     })
//     // debugger
//     console.log('thoughtsToPost', thoughtsToPost)

//     // Create the posts in the database
//     await db.post.createMany({
//       data: thoughtsToPost,
//     })
//     // debugger
//     return true
//   }

// export const postReadyThoughtsOld2: MutationResolvers['postReadyThoughtsOld2'] =
//   async () => {
//     try {
//       const currentTime = new Date()
//       const thoughtsToPost = await db.thought.findMany({
//         where: {
//           usedAsPost: false,
//           discarded: false,
//           whenWillPost: {
//             lte: currentTime,
//           },
//         },
//       })
//       for (const thought of thoughtsToPost) {
//         const newPost = await db.post.create({
//           data: {
//             body: thought.body,
//             user: thought.user,
//             usedAsPost: true,
//             reply: thought.reply,
//             profileImageUrl: thought.profileImageUrl,
//             firstName: thought.firstName,
//             lastName: thought.lastName,
//             profileId: thought.profileId,
//             whenWillPost: thought.whenWillPost,
//           },
//         })

//         await db.thought.update({
//           where: {
//             id: thought.id,
//           },
//           data: {
//             usedAsPost: true,
//           },
//         })

//         logger.info(
//           `Posted thought with ID ${thought.id} as post with ID ${newPost.id}`
//         )
//       }
//       return { id: 1, succeeded: true }
//     } catch (error) {
//       logger.error('Error while checking thoughts to post:', error)
//       return { id: 2, succeeded: false }
//     }
//   }

export const postReadyThoughts: MutationResolvers['postReadyThoughts'] =
  async () => {
    try {
      const currentTime = new Date()
      const thoughtsToPost = await db.thought.findMany({
        where: {
          usedAsPost: false,
          discarded: false,
          whenWillPost: {
            lte: currentTime,
          },
        },
      })

      const createPostAndUpdateThoughtPromises = thoughtsToPost.map(
        async (thought) => {
          const newPost = await db.post.create({
            data: {
              body: thought.body,
              user: thought.user,
              usedAsPost: true,
              reply: thought.reply,
              profileImageUrl: thought.profileImageUrl,
              firstName: thought.firstName,
              lastName: thought.lastName,
              profileId: thought.profileId,
              whenWillPost: thought.whenWillPost,
            },
          })

          await db.thought.update({
            where: {
              id: thought.id,
            },
            data: {
              usedAsPost: true,
            },
          })

          debugger

          if (thought.user) {
            const profile = await db.profile.findUnique({
              where: {
                user: thought.user,
              },
            })
            debugger

            await refreshThought({ user: profile.user, reply: null })
          }

          logger.info(
            `Posted thought with ID ${thought.id} as post with ID ${newPost.id}`
          )
          await Promise.all(createPostAndUpdateThoughtPromises)
        }
      )
      return { id: 1, succeeded: true }
    } catch (error) {
      logger.error('Error while checking thoughts to post:', error)
      return { id: 2, succeeded: false }
    }
  }
