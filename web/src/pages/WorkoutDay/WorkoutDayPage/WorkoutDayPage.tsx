import WorkoutDayCell from 'src/components/WorkoutDay/WorkoutDayCell'

type WorkoutDaysPageProps = {
  id: String
}

const WorkoutDayPage = ({ id }: WorkoutDaysPageProps) => {
  return <WorkoutDayCell id={id} />
}

export default WorkoutDayPage
