export const schema = gql`
  type Attribute {
    id: Int!
    attribute: String!
    inUse: Boolean!
    disabledAt: DateTime
    createdAt: DateTime!
    Profile: Profile!
    profileId: Int!
  }

  type Query {
    attributes: [Attribute!]! @requireAuth
    attribute(id: Int!): Attribute @requireAuth
  }

  input CreateAttributeInput {
    attribute: String!
    inUse: Boolean!
    disabledAt: DateTime
    profileId: Int!
  }

  input UpdateAttributeInput {
    attribute: String
    inUse: Boolean
    disabledAt: DateTime
    profileId: Int
  }

  type Mutation {
    createAttribute(input: CreateAttributeInput!): Attribute! @requireAuth
    updateAttribute(id: Int!, input: UpdateAttributeInput!): Attribute!
      @requireAuth
    deleteAttribute(id: Int!): Attribute! @requireAuth
  }
`
