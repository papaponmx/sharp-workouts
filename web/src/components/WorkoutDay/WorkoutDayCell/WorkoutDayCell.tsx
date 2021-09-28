import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import WorkoutDay from 'src/components/WorkoutDay/WorkoutDay'
import type { FindWorkoutDayById } from 'types/graphql'

export const QUERY = gql`
  query FindWorkoutDayById($id: String!) {
    workoutDay: workoutDay(id: $id) {
      id
      workoutHistoryId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>WorkoutDay not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  workoutDay,
}: CellSuccessProps<FindWorkoutDayById>) => {
  return <WorkoutDay workoutDay={workoutDay} />
}
