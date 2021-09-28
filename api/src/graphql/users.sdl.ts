export const schema = gql`
  type User {
    id: String!
    email: String!
    name: String!
    registerDate: DateTime!
    roles: [Role]!
    workoutHistory: WorkoutHistory
  }

  type Query {
    users: [User!]!
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
`
