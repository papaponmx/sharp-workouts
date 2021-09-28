import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/WorkoutHistory/WorkoutHistoriesCell'

const DELETE_WORKOUT_HISTORY_MUTATION = gql`
  mutation DeleteWorkoutHistoryMutation($id: Int!) {
    deleteWorkoutHistory(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const WorkoutHistoriesList = ({ workoutHistories }) => {
  const [deleteWorkoutHistory] = useMutation(DELETE_WORKOUT_HISTORY_MUTATION, {
    onCompleted: () => {
      toast.success('WorkoutHistory deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete workoutHistory ' + id + '?')) {
      deleteWorkoutHistory({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {workoutHistories.map((workoutHistory) => (
            <tr key={workoutHistory.id}>
              <td>{truncate(workoutHistory.id)}</td>
              <td>{truncate(workoutHistory.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.workoutHistory({ id: workoutHistory.id })}
                    title={'Show workoutHistory ' + workoutHistory.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWorkoutHistory({ id: workoutHistory.id })}
                    title={'Edit workoutHistory ' + workoutHistory.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete workoutHistory ' + workoutHistory.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(workoutHistory.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WorkoutHistoriesList
