import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import WorkoutDayForm from 'src/components/WorkoutDay/WorkoutDayForm'

const CREATE_WORKOUT_DAY_MUTATION = gql`
  mutation CreateWorkoutDayMutation($input: CreateWorkoutDayInput!) {
    createWorkoutDay(input: $input) {
      id
    }
  }
`

const NewWorkoutDay = () => {
  const [createWorkoutDay, { loading, error }] = useMutation(CREATE_WORKOUT_DAY_MUTATION, {
    onCompleted: () => {
      toast.success('WorkoutDay created')
      navigate(routes.workoutDays())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createWorkoutDay({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New WorkoutDay</h2>
      </header>
      <div className="rw-segment-main">
        <WorkoutDayForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWorkoutDay
