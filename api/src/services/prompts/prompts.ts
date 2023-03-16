import type {
  QueryResolvers,
  MutationResolvers,
  PromptRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const prompts: QueryResolvers['prompts'] = () => {
  return db.prompt.findMany()
}

export const prompt: QueryResolvers['prompt'] = ({ id }) => {
  return db.prompt.findUnique({
    where: { id },
  })
}

export const createPrompt: MutationResolvers['createPrompt'] = ({ input }) => {
  return db.prompt.create({
    data: input,
  })
}

export const updatePrompt: MutationResolvers['updatePrompt'] = ({
  id,
  input,
}) => {
  return db.prompt.update({
    data: input,
    where: { id },
  })
}

export const deletePrompt: MutationResolvers['deletePrompt'] = ({ id }) => {
  return db.prompt.delete({
    where: { id },
  })
}

export const Prompt: PromptRelationResolvers = {
  Profile: (_obj, { root }) => {
    return db.prompt.findUnique({ where: { id: root?.id } }).Profile()
  },
}
