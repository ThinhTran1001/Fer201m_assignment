import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router";

const Login = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`http://localhost:9999/user`);
      let users = res.data;
      console.log(users);

      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      console.log(user);

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setIsLogin(true);
        navigate("/");
      } else {
        setMessage("Email or password is incorrect");
        setIsLogin(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs lg="4"></Col>
        <Col md="auto">
          <div
            style={{
              marginTop: "5rem",
              marginBottom: "5rem",
              backgroundColor: "#DA6F22",
              borderRadius: "8px",
              padding: "40px",
            }}
          >
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "30px",
              }}
              onSubmit={handleSubmit}
            >
              <Row>
                <Col>
                  <h2
                    style={{ color: "white", fontFamily: "Arial, sans-serif" }}
                  >
                    Login
                  </h2>
                  {message && <Alert variant="danger">{message}</Alert>}
                </Col>
              </Row>
              <Form.Group
                style={{ marginTop: "30px" }}
                controlId="formBasicEmail"
              >
                <Form.Label></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ backgroundColor: "white", color: "black" }}
                />
              </Form.Group>

              <Form.Group
                style={{ marginTop: "10px" }}
                controlId="formBasicPassword"
              >
                <Form.Label></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ backgroundColor: "white", color: "black" }}
                />
              </Form.Group>
              <Row style={{ marginTop: "10px" }}>
                <Col style={{ paddingLeft: "50px" }}>
                  <h6 style={{ color: "white" }}>Don't have an account?</h6>
                </Col>
                <Col>
                  <Button style={{ color: "#008736" }} variant="link">
                    Signup
                  </Button>
                </Col>
              </Row>

              <Button
                style={{
                  marginTop: "30px",
                  color: "black",
                  backgroundColor: "white",
                  fontFamily: "Arial, sans-serif",
                }}
                variant="light"
                type="submit"
              >
                Login
              </Button>
            </Form>
          </div>
        </Col>
        <Col style={{ textAlign: "center" }} xs lg="4"></Col>
      </Row>
    </Container>
  );
};

export default Login;
