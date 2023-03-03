export const schema = gql`
  type ClerkUser {
    id: Int!
    body: String!
  }

  type Query {
    clerkusers: [ClerkUser!]! @requireAuth
  }
`
