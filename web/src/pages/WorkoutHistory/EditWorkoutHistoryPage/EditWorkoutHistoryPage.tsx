import EditWorkoutHistoryCell from 'src/components/WorkoutHistory/EditWorkoutHistoryCell'

type WorkoutHistoryPageProps = {
  id: string
}

const EditWorkoutHistoryPage = ({ id }: WorkoutHistoryPageProps) => {
  return <EditWorkoutHistoryCell id={id} />
}

export default EditWorkoutHistoryPage
