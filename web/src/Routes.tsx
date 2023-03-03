// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import { useAuth } from './auth'
import NavbarLayout from './layouts/NavbarLayout/NavbarLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={NavbarLayout}>
        <Route path="/datadeletion" page={DatadeletionPage} name="datadeletion" />
        <Route path="/privacy" page={PrivacypolicyPage} name="privacypolicy" />
        <Route path="/" page={HomePage} name="home" />
        <Private unauthenticated="home">
          <Route path="/profile" page={ProfilePage} name="profile" />
        </Private>
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
