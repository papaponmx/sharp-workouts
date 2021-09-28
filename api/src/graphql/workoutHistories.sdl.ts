export const schema = gql`
  type WorkoutHistory {
    id: String!
    user: User!
    userId: String!
    workoutDays: [WorkoutDay]!
  }

  type Query {
    workoutHistories: [WorkoutHistory!]!
    workoutHistory(id: String!): WorkoutHistory
  }

  input CreateWorkoutHistoryInput {
    userId: String!
  }

  input UpdateWorkoutHistoryInput {
    userId: String
  }

  type Mutation {
    createWorkoutHistory(input: CreateWorkoutHistoryInput!): WorkoutHistory!
    updateWorkoutHistory(
      id: String!
      input: UpdateWorkoutHistoryInput!
    ): WorkoutHistory!
    deleteWorkoutHistory(id: String!): WorkoutHistory!
  }
`
