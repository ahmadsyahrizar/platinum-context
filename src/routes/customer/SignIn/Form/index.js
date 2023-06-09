import React, { useContext } from 'react' // sama connect, //useSelector //
import Button from 'react-bootstrap/Button'
import { AuthContext } from '../../../../context/auth'
import Form from 'react-bootstrap/Form'

const FormView = () => {
  const [postAuth, data] = useContext(AuthContext)
  const { loading } = data

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const { email, password } = e.target.elements
    // console.log({email: email.value, password: password.value})
    postAuth({ email: email.value, password: password.value })
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We&#39;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        {loading ? 'Loading . . .' : 'Submit'}
      </Button>

    </Form>
  )
}

export default FormView

// eror state
