import EditWorkoutDayCell from 'src/components/WorkoutDay/EditWorkoutDayCell'

type WorkoutDayPageProps = {
  id: String
}

const EditWorkoutDayPage = ({ id }: WorkoutDayPageProps) => {
  return <EditWorkoutDayCell id={id} />
}

export default EditWorkoutDayPage
