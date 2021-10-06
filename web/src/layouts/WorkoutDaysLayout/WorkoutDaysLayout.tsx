import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type WorkoutDayLayoutProps = {
  children: React.ReactNode
}

const WorkoutDaysLayout = ({ children }: WorkoutDayLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.workoutDays()}
            className="rw-link"
          >
            WorkoutDays
          </Link>
        </h1>
        <Link
          to={routes.newWorkoutDay()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New WorkoutDay
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default WorkoutDaysLayout
