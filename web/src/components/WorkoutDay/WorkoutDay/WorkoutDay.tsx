import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_WORKOUT_DAY_MUTATION = gql`
  mutation DeleteWorkoutDayMutation($id: Int!) {
    deleteWorkoutDay(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const WorkoutDay = ({ workoutDay }) => {
  const [deleteWorkoutDay] = useMutation(DELETE_WORKOUT_DAY_MUTATION, {
    onCompleted: () => {
      toast.success('WorkoutDay deleted')
      navigate(routes.workoutDays())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete workoutDay ' + id + '?')) {
      deleteWorkoutDay({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">WorkoutDay {workoutDay.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{workoutDay.id}</td>
            </tr><tr>
              <th>Workout history id</th>
              <td>{workoutDay.workoutHistoryId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWorkoutDay({ id: workoutDay.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(workoutDay.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default WorkoutDay
