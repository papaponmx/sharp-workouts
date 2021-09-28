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
    roles: [Role!]!
    role(id: String!): Role
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
    createRole(input: CreateRoleInput!): Role!
    updateRole(id: String!, input: UpdateRoleInput!): Role!
    deleteRole(id: String!): Role!
  }
`
