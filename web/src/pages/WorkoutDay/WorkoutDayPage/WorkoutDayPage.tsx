import WorkoutDayCell from 'src/components/WorkoutDay/WorkoutDayCell'

type WorkoutDayPageProps = {
  id: string
}

const WorkoutDayPage = ({ id }: WorkoutDayPageProps) => {
  return <WorkoutDayCell id={id} />
}

export default WorkoutDayPage
