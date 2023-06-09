import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './routes/App'

import AuthProvider from './context/auth'
import reportWebVitals from './reportWebVitals'
import UserProvider from './context/user'
import { Chart, registerables } from 'chart.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { clientId } from './constants'

Chart.register(...registerables)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
