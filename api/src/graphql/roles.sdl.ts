export const schema = gql`
  type Role {
    id: String!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    User: User!
    userId: String!
  }

  type Query {
    roles: [Role!]! @requireAuth
    role(id: String!): Role @requireAuth
  }

  input CreateRoleInput {
    name: String!
    userId: String!
  }

  input UpdateRoleInput {
    name: String
    userId: String
  }

  type Mutation {
    createRole(input: CreateRoleInput!): Role! @requireAuth
    updateRole(id: String!, input: UpdateRoleInput!): Role! @requireAuth
    deleteRole(id: String!): Role! @requireAuth
  }
`
