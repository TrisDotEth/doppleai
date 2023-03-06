export const schema = gql`
  type Thought {
    body: String!
  }

  type Query {
    thought: Thought @requireAuth
  }

  input CreateThoughtInput {
    user: String!
    reply: String
  }

  input RefreshThoughtInput {
    user: String!
    reply: String
  }

  type Mutation {
    createThought(input: CreateThoughtInput!): Thought! @requireAuth
    refreshThought(input: RefreshThoughtInput!): Thought! @requireAuth
  }
`
