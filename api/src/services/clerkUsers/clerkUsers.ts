import clerk from '@clerk/clerk-sdk-node'
import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const clerkusers: QueryResolvers['clerkusers'] = async () => {
  const userList = await clerk.users.getUserList()
  console.log('clerkusers service fired', userList)
  return db.post.findMany()
}

export const clerkuser: QueryResolvers['clerkuser'] = async ({ firstName }) => {
  // console.log('firstName', firstName)

  const ttt = await clerk.users.getUserList()
  // console.log('clerkuser service fired', ttt)
  // debugger;
  const singleUser = ttt.filter((user) => user.firstName == firstName)
  debugger
  return singleUser[0]
}
