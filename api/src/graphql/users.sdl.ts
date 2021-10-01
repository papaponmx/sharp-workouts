export const schema = gql`
  type User {
    id: String!
    email: String!
    name: String!
    registerDate: DateTime!
    roles: [Role]!
    workoutHistory: [WorkoutDay]!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: String!): User @skipAuth
  }

  input CreateUserInput {
    email: String!
    name: String!
    registerDate: DateTime!
  }

  input UpdateUserInput {
    email: String
    name: String
    registerDate: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
