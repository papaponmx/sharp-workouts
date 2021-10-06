import type { EditWorkoutDayById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import WorkoutDayForm from 'src/components/WorkoutDay/WorkoutDayForm'

export const QUERY = gql`
  query EditWorkoutDayById($id: String!) {
    workoutDay: workoutDay(id: $id) {
      id
      didWorkout
      date
      userId
    }
  }
`
const UPDATE_WORKOUT_DAY_MUTATION = gql`
  mutation UpdateWorkoutDayMutation($id: String!, $input: UpdateWorkoutDayInput!) {
    updateWorkoutDay(id: $id, input: $input) {
      id
      didWorkout
      date
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ workoutDay }: CellSuccessProps<EditWorkoutDayById>) => {
  const [updateWorkoutDay, { loading, error }] = useMutation(UPDATE_WORKOUT_DAY_MUTATION, {
    onCompleted: () => {
      toast.success('WorkoutDay updated')
      navigate(routes.workoutDays())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateWorkoutDay({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit WorkoutDay {workoutDay.id}</h2>
      </header>
      <div className="rw-segment-main">
        <WorkoutDayForm workoutDay={workoutDay} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
