import { GoogleLogin } from '@react-oauth/google'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

import Form from './Form'

const SignIn = () => {
  if (document.cookie) return <Redirect to={'/'} />

  return (
    <Container>
      <h3>Welcome Back</h3>
      <Form />

      <hr />
      <p>or login with Google</p>
      <hr />
      <div>
        <GoogleLogin
          onSuccess={() => {
            return <Redirect to="/" />
          }}
          onError={() => {
            console.log('Login Failed')
          }}
        />
      </div>
    </Container>
  )
}

export default SignIn
