import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './customer/SignIn'
import LandingPage from './customer/LandingPage'
import TodoAppWebStorage from './customer/TodoAppWebstorage'
import Admin from './admin'

// NESTED ROUTES

const App = () => {
  return (
    <Router>
      <Switch>
        {/* customer */}
        <Route exact path={'/sign-in'} component={SignIn} />
        <Route exact path={'/todolist'} component={TodoAppWebStorage} />
        <Route exact path={'/'} component={LandingPage} />

        {/* /admin    */}
        <Route path={'/admin'} component={Admin} />

      </Switch>
    </Router>
  )
}

export default App
