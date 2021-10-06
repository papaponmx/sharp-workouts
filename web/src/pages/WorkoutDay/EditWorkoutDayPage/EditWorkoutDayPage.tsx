import EditWorkoutDayCell from 'src/components/WorkoutDay/EditWorkoutDayCell'

type WorkoutDaysPageProps = {
  id: string
}

const EditWorkoutDayPage = ({ id }: WorkoutDaysPageProps) => {
  return <EditWorkoutDayCell id={id} />
}

export default EditWorkoutDayPage
