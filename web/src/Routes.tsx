// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import HomePage from 'src/pages/HomePage'

const Routes = (): JSX.Element => {
  return (
  <Router useAuth={useAuth}>
    <Private unauthenticated="HomePage" roles="user">
      <Route path="/account" page={AccountPage} name="account" />
    <Route path="/" page={HomePage} name="homepage" />
    </Private>
    <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
