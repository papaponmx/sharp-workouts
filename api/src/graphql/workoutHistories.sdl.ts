export const schema = gql`
  type WorkoutHistory {
    id: Int!
    user: User!
    userId: Int!
    workoutDays: [WorkoutDay]!
  }

  type Query {
    workoutHistories: [WorkoutHistory!]!
    workoutHistory(id: Int!): WorkoutHistory
  }

  input CreateWorkoutHistoryInput {
    userId: Int!
  }

  input UpdateWorkoutHistoryInput {
    userId: Int
  }

  type Mutation {
    createWorkoutHistory(input: CreateWorkoutHistoryInput!): WorkoutHistory!
    updateWorkoutHistory(
      id: Int!
      input: UpdateWorkoutHistoryInput!
    ): WorkoutHistory!
    deleteWorkoutHistory(id: Int!): WorkoutHistory!
  }
`
