import type { FindWorkoutDays } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import WorkoutDays from 'src/components/WorkoutDay/WorkoutDays'

export const QUERY = gql`
  query FindWorkoutDays {
    workoutDays {
      id
      didWorkout
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No workoutDays yet. '}
      <Link
        to={routes.newWorkoutDay()}
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

export const Success = ({ workoutDays }: CellSuccessProps<FindWorkoutDays>) => {
  return <WorkoutDays workoutDays={workoutDays} />
}
