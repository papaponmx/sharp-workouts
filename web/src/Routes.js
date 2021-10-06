// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Route, Router, Set } from '@redwoodjs/router'
import WorkoutDaysLayout from 'src/layouts/WorkoutDaysLayout'
import RolesLayout from 'src/layouts/RolesLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import WorkoutDaysLayout from 'src/layouts/WorkoutDaysLayout'
import HomePage from 'src/pages/HomePage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={WorkoutDaysLayout}>
        <Route path="/workout-days/{id}/edit" page={WorkoutDayEditWorkoutDayPage} name="editWorkoutDay" />
        <Route path="/workout-days/{id}" page={WorkoutDayWorkoutDayPage} name="workoutDay" />
      </Set>
      <Private unauthenticated="login">
        <Route path="/settings" page={SettingsPage} name="settings" />
      </Private>
      <Route path="/" page={HomePage} name="home" />

      <Route path="/login" page={LoginPage} name="login" />
      <Route notfound page={NotFoundPage} />
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:String}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:String}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>

      <Set wrap={RolesLayout}>
        <Route path="/roles/new" page={RoleNewRolePage} name="newRole" />
        <Route path="/roles/{id}/edit" page={RoleEditRolePage} name="editRole" />
        <Route path="/roles/{id}" page={RoleRolePage} name="role" />
        <Route path="/roles" page={RoleRolesPage} name="roles" />
      </Set>
      <Set role={['customer']} wrap={WorkoutDaysLayout}>
        <Route path="/workout-days/new" page={WorkoutDayNewWorkoutDayPage} name="newWorkoutDay" />
        <Route path="/workout-days/{id:Int}/edit" page={WorkoutDayEditWorkoutDayPage} name="editWorkoutDay" />
        <Route path="/workout-days/{id:Int}" page={WorkoutDayWorkoutDayPage} name="workoutDay" />
        <Route path="/workout-days" page={WorkoutDayWorkoutDaysPage} name="workoutDays" />
      </Set>
    </Router>
  )
}

export default Routes
