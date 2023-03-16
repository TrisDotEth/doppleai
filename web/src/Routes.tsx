// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import NavbarLayout from './layouts/NavbarLayout/NavbarLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Prompts" titleTo="prompts" buttonLabel="New Prompt" buttonTo="newPrompt">
        <Route path="/prompts/new" page={PromptNewPromptPage} name="newPrompt" />
        <Route path="/prompts/{id:Int}/edit" page={PromptEditPromptPage} name="editPrompt" />
        <Route path="/prompts/{id:Int}" page={PromptPromptPage} name="prompt" />
        <Route path="/prompts" page={PromptPromptsPage} name="prompts" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Attributes" titleTo="attributes" buttonLabel="New Attribute" buttonTo="newAttribute">
        <Route path="/attributes/new" page={AttributeNewAttributePage} name="newAttribute" />
        <Route path="/attributes/{id:Int}/edit" page={AttributeEditAttributePage} name="editAttribute" />
        <Route path="/attributes/{id:Int}" page={AttributeAttributePage} name="attribute" />
        <Route path="/attributes" page={AttributeAttributesPage} name="attributes" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Profiles" titleTo="profiles" buttonLabel="New Profile" buttonTo="newProfile">
        <Route path="/profiles/new" page={ProfileNewProfilePage} name="newProfile" />
        <Route path="/profiles/{id:Int}/edit" page={ProfileEditProfilePage} name="editProfile" />
        <Route path="/profiles/{id:Int}" page={ProfileProfilePage} name="profile" />
        <Route path="/profiles" page={ProfileProfilesPage} name="profiles" />
      </Set>
      <Set wrap={NavbarLayout}>
        <Route path="/datadeletion" page={DatadeletionPage} name="datadeletion" />
        <Route path="/privacy" page={PrivacypolicyPage} name="privacypolicy" />
        <Route path="/" page={HomePage} name="home" />
        <Private unauthenticated="home">
          {/* <Route path="/profile" page={ProfilePage} name="profile" /> */}
          <Route path="/{name}" page={ProfilePage} name="profilepage" />
        </Private>

        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
