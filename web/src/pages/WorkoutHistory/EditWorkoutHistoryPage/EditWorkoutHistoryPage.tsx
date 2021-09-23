import EditWorkoutHistoryCell from 'src/components/WorkoutHistory/EditWorkoutHistoryCell'

type WorkoutHistoryPageProps = {
  id: Int
}

const EditWorkoutHistoryPage = ({ id }: WorkoutHistoryPageProps) => {
  return <EditWorkoutHistoryCell id={id} />
}

export default EditWorkoutHistoryPage
