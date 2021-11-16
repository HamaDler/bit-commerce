import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../services/products-api";
import { login } from "../features/auth/authSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
export default function Login() {
  // our local user state
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const localToken = localStorage.getItem("token");
  useEffect(() => {
    console.log(localStorage.getItem("token"));
  }, [localToken]);

  const [
    loginUser, // This is the mutation trigger function, u can pass form data here
    { data, error, isLoading },
  ] = useLoginUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(user);
  };

  const handleEmail = (e) => {
    const emailValue = e.target.value;
    let newState = { ...user };
    newState.email = emailValue;
    setUser(newState);
  };

  const handlePassword = (e) => {
    const passwordValue = e.target.value;
    let newState = { ...user };
    newState.password = passwordValue;

    setUser(newState);
  };

  if (isLoading) {
    return <p> Loading</p>;
  }
  if (error) {
    return <p> we have an error</p>;
  }

  if (data) {
    console.log("the data from redux", data);
    localStorage.setItem("token", data.token);
    dispatch(login({ token: data.token }));
  }
  return (
    <>
      <Container>
        <Form className="mt-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleEmail}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
