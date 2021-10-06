export const QUERY = gql`
  query FindWorkoutDayQuery($id: String!) {
    workoutDay: workoutDay(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ workoutDay }) => {
  return <div>{JSON.stringify(workoutDay)}</div>
}
