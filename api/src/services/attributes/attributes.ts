import type {
  QueryResolvers,
  MutationResolvers,
  AttributeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const attributes: QueryResolvers['attributes'] = () => {
  return db.attribute.findMany()
}

export const attribute: QueryResolvers['attribute'] = ({ id }) => {
  return db.attribute.findUnique({
    where: { id },
  })
}

export const createAttribute: MutationResolvers['createAttribute'] = ({
  input,
}) => {
  return db.attribute.create({
    data: input,
  })
}

export const updateAttribute: MutationResolvers['updateAttribute'] = ({
  id,
  input,
}) => {
  return db.attribute.update({
    data: input,
    where: { id },
  })
}

export const deleteAttribute: MutationResolvers['deleteAttribute'] = ({
  id,
}) => {
  return db.attribute.delete({
    where: { id },
  })
}

export const Attribute: AttributeRelationResolvers = {
  Profile: (_obj, { root }) => {
    return db.attribute.findUnique({ where: { id: root?.id } }).Profile()
  },
}
