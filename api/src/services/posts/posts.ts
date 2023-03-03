import type { QueryResolvers, MutationResolvers } from 'types/graphql'
import clerk from '@clerk/clerk-sdk-node'

import { db } from 'src/lib/db'

import { generateAction } from '../generateAction/generateAction'

export const posts: QueryResolvers['posts'] = () => {
  return db.post.findMany({
    orderBy: [{
      id: 'desc'
    }]
  })
}

export const userPosts: QueryResolvers['userPosts'] = async ({ firstName }) => {

  const ttt = await clerk.users.getUserList()
  // debugger;
  const singleUser = ttt.filter(user => user.firstName == firstName)
  const userId = singleUser[0].id

  let posts = await db.post.findMany({
      where: {
        user: userId
      },
      orderBy: [{
        id: 'desc'
      }]
    })

  console.log('posts raw', posts)
  const updatedWithProfileImage = (posts) => {
    posts.map(post => {
      post.profileImageUrl = singleUser[0].profileImageUrl
      post.firstName = singleUser[0].firstName
      post.lastName = singleUser[0].lastName
    })
  }
  const updatetest = updatedWithProfileImage(posts)
  console.log('Updated with new image', updatetest)
  console.log('Updated with new posts maybe', posts)

  // return updatedWithProfileImage(posts)

  // /WOOOOOOOOOOO!!
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
  console.log(input)
  const userDetails = await clerk.users.getUser(input.user)
  const inputUpdatedWithPost = await generateAction({ input })
  const inputUpdatedWithPostAndUserDetails = (inputUpdatedWithPost) => {
    inputUpdatedWithPost.profileImageUrl = userDetails.profileImageUrl
    inputUpdatedWithPost.firstName = userDetails.firstName
    inputUpdatedWithPost.lastName = userDetails.lastName
  }



  return db.post.create({
    data: inputUpdatedWithPost,
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
