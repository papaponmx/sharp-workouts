export const schema = gql`
  type WorkoutDay {
    id: String!
    WorkoutHistory: WorkoutHistory
    workoutHistoryId: String
  }

  type Query {
    workoutDays: [WorkoutDay!]!
    workoutDay(id: String!): WorkoutDay
  }

  input CreateWorkoutDayInput {
    workoutHistoryId: String
  }

  input UpdateWorkoutDayInput {
    workoutHistoryId: String
  }

  type Mutation {
    createWorkoutDay(input: CreateWorkoutDayInput!): WorkoutDay!
    updateWorkoutDay(id: String!, input: UpdateWorkoutDayInput!): WorkoutDay!
    deleteWorkoutDay(id: String!): WorkoutDay!
  }
`
