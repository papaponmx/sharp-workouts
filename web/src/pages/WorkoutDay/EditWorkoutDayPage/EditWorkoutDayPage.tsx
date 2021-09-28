import EditWorkoutDayCell from 'src/components/WorkoutDay/EditWorkoutDayCell'

type WorkoutDayPageProps = {
  id: Int
}

const EditWorkoutDayPage = ({ id }: WorkoutDayPageProps) => {
  return <EditWorkoutDayCell id={id} />
}

export default EditWorkoutDayPage
