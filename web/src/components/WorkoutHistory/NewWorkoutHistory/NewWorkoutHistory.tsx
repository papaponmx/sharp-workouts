import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import WorkoutHistoryForm from 'src/components/WorkoutHistory/WorkoutHistoryForm'

const CREATE_WORKOUT_HISTORY_MUTATION = gql`
  mutation CreateWorkoutHistoryMutation($input: CreateWorkoutHistoryInput!) {
    createWorkoutHistory(input: $input) {
      id
    }
  }
`

const NewWorkoutHistory = () => {
  const [createWorkoutHistory, { loading, error }] = useMutation(CREATE_WORKOUT_HISTORY_MUTATION, {
    onCompleted: () => {
      toast.success('WorkoutHistory created')
      navigate(routes.workoutHistories())
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId), })
    createWorkoutHistory({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New WorkoutHistory</h2>
      </header>
      <div className="rw-segment-main">
        <WorkoutHistoryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWorkoutHistory
