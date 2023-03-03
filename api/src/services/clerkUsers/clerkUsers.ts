import clerk from '@clerk/clerk-sdk-node'
import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const clerkusers: QueryResolvers['clerkusers'] = async () => {
  const userList = await clerk.users.getUserList()
  console.log('fired', userList)
  return db.post.findMany()
}
