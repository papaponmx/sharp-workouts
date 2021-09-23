import type { EditWorkoutHistoryById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import WorkoutHistoryForm from 'src/components/WorkoutHistory/WorkoutHistoryForm'

export const QUERY = gql`
  query EditWorkoutHistoryById($id: Int!) {
    workoutHistory: workoutHistory(id: $id) {
      id
      userId
    }
  }
`
const UPDATE_WORKOUT_HISTORY_MUTATION = gql`
  mutation UpdateWorkoutHistoryMutation($id: Int!, $input: UpdateWorkoutHistoryInput!) {
    updateWorkoutHistory(id: $id, input: $input) {
      id
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ workoutHistory }: CellSuccessProps<EditWorkoutHistoryById>) => {
  const [updateWorkoutHistory, { loading, error }] = useMutation(UPDATE_WORKOUT_HISTORY_MUTATION, {
    onCompleted: () => {
      toast.success('WorkoutHistory updated')
      navigate(routes.workoutHistories())
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId), })
    updateWorkoutHistory({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit WorkoutHistory {workoutHistory.id}</h2>
      </header>
      <div className="rw-segment-main">
        <WorkoutHistoryForm workoutHistory={workoutHistory} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
