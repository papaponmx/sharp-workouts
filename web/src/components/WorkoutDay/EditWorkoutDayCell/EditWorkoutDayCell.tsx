import type { EditWorkoutDayById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import WorkoutDayForm from 'src/components/WorkoutDay/WorkoutDayForm'

export const QUERY = gql`
  query EditWorkoutDayById($id: Int!) {
    workoutDay: workoutDay(id: $id) {
      id
      workoutHistoryId
    }
  }
`
const UPDATE_WORKOUT_DAY_MUTATION = gql`
  mutation UpdateWorkoutDayMutation($id: Int!, $input: UpdateWorkoutDayInput!) {
    updateWorkoutDay(id: $id, input: $input) {
      id
      workoutHistoryId
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
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { workoutHistoryId: parseInt(input.workoutHistoryId), })
    updateWorkoutDay({ variables: { id, input: castInput } })
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
