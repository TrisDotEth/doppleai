export const schema = gql`
  type Profile {
    id: Int!
    attributes: [Attribute]!
    user: String!
    prompts: [Prompt]!
    createdAt: DateTime!
  }

  type Query {
    profiles: [Profile!]! @requireAuth
    profile(id: Int!): Profile @requireAuth
  }

  input CreateProfileInput {
    user: String!
  }

  input UpdateProfileInput {
    user: String
  }

  type Mutation {
    createProfile(input: CreateProfileInput!): Profile! @requireAuth
    updateProfile(id: Int!, input: UpdateProfileInput!): Profile! @requireAuth
    deleteProfile(id: Int!): Profile! @requireAuth
  }
`
