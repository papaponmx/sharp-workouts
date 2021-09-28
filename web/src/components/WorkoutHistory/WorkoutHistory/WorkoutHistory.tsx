import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_WORKOUT_HISTORY_MUTATION = gql`
  mutation DeleteWorkoutHistoryMutation($id: Int!) {
    deleteWorkoutHistory(id: $id) {
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

const WorkoutHistory = ({ workoutHistory }) => {
  const [deleteWorkoutHistory] = useMutation(DELETE_WORKOUT_HISTORY_MUTATION, {
    onCompleted: () => {
      toast.success('WorkoutHistory deleted')
      navigate(routes.workoutHistories())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete workoutHistory ' + id + '?')) {
      deleteWorkoutHistory({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">WorkoutHistory {workoutHistory.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{workoutHistory.id}</td>
            </tr><tr>
              <th>User id</th>
              <td>{workoutHistory.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWorkoutHistory({ id: workoutHistory.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(workoutHistory.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default WorkoutHistory
