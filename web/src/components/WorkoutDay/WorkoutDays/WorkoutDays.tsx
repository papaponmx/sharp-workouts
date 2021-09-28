import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/WorkoutDay/WorkoutDaysCell'

const DELETE_WORKOUT_DAY_MUTATION = gql`
  mutation DeleteWorkoutDayMutation($id: Int!) {
    deleteWorkoutDay(id: $id) {
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

const WorkoutDaysList = ({ workoutDays }) => {
  const [deleteWorkoutDay] = useMutation(DELETE_WORKOUT_DAY_MUTATION, {
    onCompleted: () => {
      toast.success('WorkoutDay deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete workoutDay ' + id + '?')) {
      deleteWorkoutDay({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Workout history id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {workoutDays.map((workoutDay) => (
            <tr key={workoutDay.id}>
              <td>{truncate(workoutDay.id)}</td>
              <td>{truncate(workoutDay.workoutHistoryId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.workoutDay({ id: workoutDay.id })}
                    title={'Show workoutDay ' + workoutDay.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWorkoutDay({ id: workoutDay.id })}
                    title={'Edit workoutDay ' + workoutDay.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete workoutDay ' + workoutDay.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(workoutDay.id)}
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

export default WorkoutDaysList
