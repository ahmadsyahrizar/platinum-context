import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminDashboard from './Dashboard'
import AdminLogin from './Login'

const AdminRoutes = () => {
  return (
    <Switch>
      <Route exact path="/admin/login" component={AdminLogin} />
      <Route exact path="/admin/dashboard" component={AdminDashboard} />
      {/* <Route exact path="/admin/car-list" component={AdminCarList} /> */}
    </Switch>
  )
}

export default AdminRoutes
