export const schema = gql`
  type ClerkUser {
    id: String!
    body: String!
  }

  type ClerkUserTest {
    id: String!
    firstName: String!
    lastName: String!
    profileImageUrl: String!
  }

  type Query {
    clerkusers: [ClerkUser!]! @requireAuth
    clerkuser(firstName: String!): ClerkUserTest @requireAuth
  }
`
