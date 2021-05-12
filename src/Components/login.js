import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const Login = (props) => {
  return (
    <Form inline>
      <FormGroup>
        <Label for="exampleEmail" hidden></Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Email"
        />
      </FormGroup>{" "}
      <FormGroup>
        <Label for="examplePassword" hidden></Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="Password"
        />
      </FormGroup>{" "}
      <br />
    </Form>
  );
};

export default Login;
