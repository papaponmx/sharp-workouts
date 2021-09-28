import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import WorkoutHistory from 'src/components/WorkoutHistory/WorkoutHistory'
import type { FindWorkoutHistoryById } from 'types/graphql'

export const QUERY = gql`
  query FindWorkoutHistoryById($id: String!) {
    workoutHistory: workoutHistory(id: $id) {
      id
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>WorkoutHistory not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  workoutHistory,
}: CellSuccessProps<FindWorkoutHistoryById>) => {
  return <WorkoutHistory workoutHistory={workoutHistory} />
}
