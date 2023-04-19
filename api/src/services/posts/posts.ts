import clerk from '@clerk/clerk-sdk-node'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

import { generateAction } from '../generateAction/generateAction'
import { refreshThought } from '../thought/thought'

export const posts: QueryResolvers['posts'] = async () => {
  //TODO this could be faster awaiting in parallel
  //Get all users
  const clerkUsers = await clerk.users.getUserList()
  //Get all posts
  const posts = await db.post.findMany({
    orderBy: [
      {
        id: 'desc',
      },
    ],
  })

  const updatedWithProfileImage = (posts) => {
    posts.map((post) => {
      const userDeets = clerkUsers.filter((user) => user.id == post.user)
      // console.log('post', post)
      post.profileImageUrl = userDeets[0].profileImageUrl
      post.firstName = userDeets[0].firstName
      post.lastName = userDeets[0].lastName
    })
  }

  updatedWithProfileImage(posts)

  return posts
}

export const userPosts: QueryResolvers['userPosts'] = async ({ firstName }) => {
  //Get all users
  const clerkUsers = await clerk.users.getUserList()
  // console.log('userPosts service fired - clerk users are:', clerkUsers)
  //Find individual user
  const singleUser = await clerkUsers.filter(
    (user) => user.firstName == firstName
  )
  if (!singleUser[0]) return false
  logger.info('singleUser is - ', singleUser[0])

  const userId = singleUser[0].id

  //Get all posts
  const posts = await db.post.findMany({
    where: {
      user: userId,
    },
    orderBy: [
      {
        id: 'desc',
      },
    ],
  })

  // console.log('posts raw', posts)
  //Add Clerk ID fields
  const updatedWithProfileImage = (posts) => {
    posts.map((post) => {
      post.profileImageUrl = singleUser[0].profileImageUrl
      post.firstName = singleUser[0].firstName
      post.lastName = singleUser[0].lastName
    })
  }
  const updatetest = updatedWithProfileImage(posts)

  //Send back updated posts
  // console.log('Updated with new image', updatetest)
  // console.log('Updated with new posts maybe', posts)

  return posts

  //UNUSED TESTING
  //  const updatedWithProfileImage2 = async () => {
  //   return Promise.all(posts.map(item => getProfileDetails(item)))
  //  }

  //  const getProfileDetails = async item => {
  //   ttt.filter(user => user.id == item.user)
  //  }

  // return db.post.findMany({
  //   where: {
  //     user: userId
  //   },
  //   orderBy: [{
  //     id: 'desc'
  //   }]
  // })
}

export const post: QueryResolvers['post'] = ({ id }) => {
  return db.post.findUnique({
    where: { id },
  })
}

export const createPost: MutationResolvers['createPost'] = async ({
  input,
}) => {
  //Jank to get the thought to refresh
  const refreshInput = {
    user: context.currentUser.id,
    reply: null,
  }
  console.log('CreatePosts input - ', input)
  await refreshThought({ input: refreshInput })
  //End jank... kinda
  //TODO link this new post with the thought that created it

  console.log('CreatePosts input after- ', input)
  return db.post.create({
    data: input,
  })
}

export const updatePost: MutationResolvers['updatePost'] = ({ id, input }) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost: MutationResolvers['deletePost'] = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}
