import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ROLES } from '../../constants'
import { AuthContext } from '../../context/auth'
import AdminDashboard from './Dashboard'
import AdminLogin from './Login'

const AdminRoutes = () => {
  const [, data] = useContext(AuthContext)
  const { dataAuth } = data || {}
  const role = dataAuth.role || {}
  console.log({ role })

  if (role === ROLES.CUSTOMER) return <Redirect to={'/'} />

  return (
    <Switch>
      <Route exact path="/admin/login" component={AdminLogin} />
      <Route exact path="/admin/dashboard" component={AdminDashboard} />
      {/* <Route exact path="/admin/car-list" component={AdminCarList} /> */}
    </Switch>
  )
}

export default AdminRoutes
