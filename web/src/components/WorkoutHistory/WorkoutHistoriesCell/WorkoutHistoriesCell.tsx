import type { FindWorkoutHistories } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import WorkoutHistories from 'src/components/WorkoutHistory/WorkoutHistories'

export const QUERY = gql`
  query FindWorkoutHistories {
    workoutHistories {
      id
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No workoutHistories yet. '}
      <Link
        to={routes.newWorkoutHistory()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ workoutHistories }: CellSuccessProps<FindWorkoutHistories>) => {
  return <WorkoutHistories workoutHistories={workoutHistories} />
}
