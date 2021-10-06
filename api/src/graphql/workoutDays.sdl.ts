export const schema = gql`
  type WorkoutDay {
    id: String!
    didWorkout: Boolean!
    date: DateTime!
    user: User
    userId: String
  }

  type Query {
    workoutDays: [WorkoutDay!]! @requireAuth
    workoutDay(id: String!): WorkoutDay @requireAuth
  }

  input CreateWorkoutDayInput {
    didWorkout: Boolean!
    date: DateTime!
    userId: String
  }

  input UpdateWorkoutDayInput {
    didWorkout: Boolean
    date: DateTime
    userId: String
  }

  type Mutation {
    createWorkoutDay(input: CreateWorkoutDayInput!): WorkoutDay! @requireAuth
    updateWorkoutDay(id: String!, input: UpdateWorkoutDayInput!): WorkoutDay!
      @requireAuth
    deleteWorkoutDay(id: String!): WorkoutDay! @requireAuth
  }
`
