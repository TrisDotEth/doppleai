export const schema = gql`
  type ClerkUser {
    id: Int!
    body: String!
  }

  type ClerkUserTest {
    id: Int!
    firstName: String!
    lastName: String!
    profileImageUrl: String!
  }

  type Query {
    clerkusers: [ClerkUser!]! @requireAuth
    clerkuser(firstName: String!): ClerkUserTest @requireAuth
  }
`
