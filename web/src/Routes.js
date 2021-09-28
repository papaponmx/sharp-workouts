// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import UsersLayout from 'src/layouts/UsersLayout'
import WorkoutDaysLayout from 'src/layouts/WorkoutDaysLayout'
import WorkoutHistoriesLayout from 'src/layouts/WorkoutHistoriesLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={WorkoutDaysLayout}>
        <Route path="/workout-days/new" page={WorkoutDayNewWorkoutDayPage} name="newWorkoutDay" />
        <Route path="/workout-days/{id:Int}/edit" page={WorkoutDayEditWorkoutDayPage} name="editWorkoutDay" />
        <Route path="/workout-days/{id:Int}" page={WorkoutDayWorkoutDayPage} name="workoutDay" />
        <Route path="/workout-days" page={WorkoutDayWorkoutDaysPage} name="workoutDays" />
      </Set>
      <Set wrap={WorkoutHistoriesLayout}>
        <Route path="/workout-histories/new" page={WorkoutHistoryNewWorkoutHistoryPage} name="newWorkoutHistory" />
        <Route path="/workout-histories/{id:Int}/edit" page={WorkoutHistoryEditWorkoutHistoryPage} name="editWorkoutHistory" />
        <Route path="/workout-histories/{id:Int}" page={WorkoutHistoryWorkoutHistoryPage} name="workoutHistory" />
        <Route path="/workout-histories" page={WorkoutHistoryWorkoutHistoriesPage} name="workoutHistories" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
