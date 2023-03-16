export const schema = gql`
  type Prompt {
    id: Int!
    prompt: String!
    isUse: Boolean!
    disabledAt: DateTime
    createdAt: DateTime!
    Profile: Profile!
    profileId: Int!
  }

  type Query {
    prompts: [Prompt!]! @requireAuth
    prompt(id: Int!): Prompt @requireAuth
  }

  input CreatePromptInput {
    prompt: String!
    isUse: Boolean!
    disabledAt: DateTime
    profileId: Int!
  }

  input UpdatePromptInput {
    prompt: String
    isUse: Boolean
    disabledAt: DateTime
    profileId: Int
  }

  type Mutation {
    createPrompt(input: CreatePromptInput!): Prompt! @requireAuth
    updatePrompt(id: Int!, input: UpdatePromptInput!): Prompt! @requireAuth
    deletePrompt(id: Int!): Prompt! @requireAuth
  }
`
