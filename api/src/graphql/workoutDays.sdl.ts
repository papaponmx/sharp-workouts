export const schema = gql`
  type WorkoutDay {
    id: String!
    didWorkout: Boolean!
    user: User!
    userId: String!
  }

  type Query {
    workoutDays: [WorkoutDay!]!
    workoutDay(id: String!): WorkoutDay
  }

  input CreateWorkoutDayInput {
    didWorkout: Boolean!
    userId: String!
  }

  input UpdateWorkoutDayInput {
    didWorkout: Boolean
    userId: String
  }

  type Mutation {
    createWorkoutDay(input: CreateWorkoutDayInput!): WorkoutDay!
    updateWorkoutDay(id: String!, input: UpdateWorkoutDayInput!): WorkoutDay!
    deleteWorkoutDay(id: String!): WorkoutDay!
  }
`
