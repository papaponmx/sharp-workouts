import WorkoutDayCell from 'src/components/WorkoutDay/WorkoutDayCell'

type WorkoutDayPageProps = {
  id: Int
}

const WorkoutDayPage = ({ id }: WorkoutDayPageProps) => {
  return <WorkoutDayCell id={id} />
}

export default WorkoutDayPage
