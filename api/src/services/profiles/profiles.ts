import type {
  QueryResolvers,
  MutationResolvers,
  ProfileRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const profiles: QueryResolvers['profiles'] = () => {
  return db.profile.findMany()
}

export const profile: QueryResolvers['profile'] = ({ id }) => {
  return db.profile.findUnique({
    where: { id },
  })
}

export const profileByUserString: QueryResolvers['profileByUserString'] = ({
  user,
}) => {
  return db.profile.findUnique({
    where: { user },
  })
}

export const createProfile: MutationResolvers['createProfile'] = ({
  input,
}) => {
  return db.profile.create({
    data: input,
  })
}

export const updateProfile: MutationResolvers['updateProfile'] = ({
  id,
  input,
}) => {
  return db.profile.update({
    data: input,
    where: { id },
  })
}

export const deleteProfile: MutationResolvers['deleteProfile'] = ({ id }) => {
  return db.profile.delete({
    where: { id },
  })
}

export const Profile: ProfileRelationResolvers = {
  attributes: (_obj, { root }) => {
    return db.profile.findUnique({ where: { id: root?.id } }).attributes()
  },
  prompts: (_obj, { root }) => {
    return db.profile.findUnique({ where: { id: root?.id } }).prompts()
  },
}
