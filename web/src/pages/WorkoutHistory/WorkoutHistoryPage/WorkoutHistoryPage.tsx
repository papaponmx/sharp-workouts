import WorkoutHistoryCell from 'src/components/WorkoutHistory/WorkoutHistoryCell'

type WorkoutHistoryPageProps = {
id: string
}

const WorkoutHistoryPage = ({ id }: WorkoutHistoryPageProps) => {
  return <WorkoutHistoryCell id={id} />
}

export default WorkoutHistoryPage
