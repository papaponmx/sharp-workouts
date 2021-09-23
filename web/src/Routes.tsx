// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Route, Router } from '@redwoodjs/router'
import WorkoutHistoriesLayout from 'src/layouts/WorkoutHistoriesLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={WorkoutHistoriesLayout}>
        <Route path="/workout-histories/new" page={WorkoutHistoryNewWorkoutHistoryPage} name="newWorkoutHistory" />
        <Route path="/workout-histories/{id:Int}/edit" page={WorkoutHistoryEditWorkoutHistoryPage} name="editWorkoutHistory" />
        <Route path="/workout-histories/{id:Int}" page={WorkoutHistoryWorkoutHistoryPage} name="workoutHistory" />
        <Route path="/workout-histories" page={WorkoutHistoryWorkoutHistoriesPage} name="workoutHistories" />
      </Set>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
