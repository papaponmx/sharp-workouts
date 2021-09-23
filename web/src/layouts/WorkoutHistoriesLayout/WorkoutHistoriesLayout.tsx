import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type WorkoutHistoryLayoutProps = {
  children: React.ReactNode
}

const WorkoutHistoriesLayout = ({ children }: WorkoutHistoryLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.workoutHistories()}
            className="rw-link"
          >
            WorkoutHistories
          </Link>
        </h1>
        <Link
          to={routes.newWorkoutHistory()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New WorkoutHistory
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default WorkoutHistoriesLayout