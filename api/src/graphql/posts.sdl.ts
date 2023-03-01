export const schema = gql`
  type Post {
    id: Int!
    body: String!
    user: String!
    manualPost: Boolean!
    usedAsPost: Boolean!
    whenWillPost: DateTime!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    body: String!
    user: String!
    manualPost: Boolean!
    usedAsPost: Boolean!
    whenWillPost: DateTime
  }

  input UpdatePostInput {
    body: String
    user: String
    manualPost: Boolean
    usedAsPost: Boolean
    whenWillPost: DateTime
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
