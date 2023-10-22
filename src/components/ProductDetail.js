import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập tại đây, ví dụ: gửi yêu cầu đăng nhập đến máy chủ hoặc kiểm tra thông tin đăng nhập
  };

  return (
    <Container>
        <Row>
       <Col xs lg="4" >
         
        </Col>  
    <Col md="auto">
   <div style={{marginTop: '5rem', marginBottom: "5rem", backgroundColor: 'grey', padding: '3rem'}}>
    <Form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'30px' }} onSubmit={handleSubmit}>
         <Row >
          <Col>
            <h2 style={{color: 'white'}}>Login</h2>
          </Col>
        </Row>
      <Form.Group style={{marginTop: '30px'}}  controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group style={{marginTop: '10px'}}  controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
    <Row style={{marginTop: '10px'}} > 
        <Col  style={{paddingLeft: '50px'}}>
      <h6 style={{color: 'White'}}>Don't have account?</h6>
      </Col>
      <Col>
      <Button style={{color: 'LightGreen'}} variant="link">Signup</Button>
      </Col>
    </Row>
    

      <Button style={{marginTop: '30px', color: 'silver'}}  variant="light" type="submit">
        Login
      </Button>
    </Form>
    </div>
    </Col>
    <Col style={{textAlign: 'center'}} xs lg="4">
          
        </Col>
   
   
   </Row>
   </Container>
  );
};

export default LoginForm;