export const schema = gql`
  type WorkoutDay {
    id: Int!
    WorkoutHistory: WorkoutHistory
    workoutHistoryId: Int
  }

  type Query {
    workoutDays: [WorkoutDay!]!
    workoutDay(id: Int!): WorkoutDay
  }

  input CreateWorkoutDayInput {
    workoutHistoryId: Int
  }

  input UpdateWorkoutDayInput {
    workoutHistoryId: Int
  }

  type Mutation {
    createWorkoutDay(input: CreateWorkoutDayInput!): WorkoutDay!
    updateWorkoutDay(id: Int!, input: UpdateWorkoutDayInput!): WorkoutDay!
    deleteWorkoutDay(id: Int!): WorkoutDay!
  }
`
