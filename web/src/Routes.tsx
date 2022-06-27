// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import HomePage from 'src/pages/HomePage'

const Routes = () => {
  return (
  <Router useAuth={useAuth}>
      <Route path="/accout" page={AccoutPage} name="accout" />
      <Route path="/" page={HomePage} name="homepage" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
