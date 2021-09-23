import WorkoutHistoryCell from 'src/components/WorkoutHistory/WorkoutHistoryCell'

type WorkoutHistoryPageProps = {
  id: Int
}

const WorkoutHistoryPage = ({ id }: WorkoutHistoryPageProps) => {
  return <WorkoutHistoryCell id={id} />
}

export default WorkoutHistoryPage
