import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

import { AuthContext } from "../../../context/auth";
import Form from "./Form";

const SignIn = () => {
  // const [, data] = useContext(AuthContext);
  // const { access_token, name } = data?.dataAuth || {};
  // const error = name === "Not Found";
  console.log({ cookie: document.cookie});

  if (document.cookie) return <Redirect to={"/"} />;

  return (
    <Container>
      <h3>Welcome Back</h3>

      <Form />
      {/* {error && <Alert variant="danger">Sign In Failed! try again</Alert>} */}
    </Container>
  );
};

export default SignIn;
