import type { FindWorkoutDayById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import WorkoutDay from 'src/components/WorkoutDay/WorkoutDay'

export const QUERY = gql`
  query FindWorkoutDayById($id: String!) {
    workoutDay: workoutDay(id: $id) {
      id
      didWorkout
      date
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>WorkoutDay not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ workoutDay }: CellSuccessProps<FindWorkoutDayById>) => {
  return <WorkoutDay workoutDay={workoutDay} />
}
