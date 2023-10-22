import React, { useState } from 'react'
import { Col, Container, Row, Image, Form, Button, FormCheck, FormGroup } from 'react-bootstrap'

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rePassword: '',
        emailOrPhone: '',
        agreePolicy: false,
    });

    const { username, password, rePassword, emailOrPhone, agreePolicy } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý việc đăng ký tài khoản ở đây, ví dụ: gửi dữ liệu đăng ký đến máy chủ
    };

    return (
        <div>
            <Container style={{ margin: '3rem' }}>
                <div >
                    <Col>
                        <Row>
                            <Col style={{ width: '100%',borderRadius: "8px" }}>



                                <Image src="./images/signUp/register.png" thumbnail style={{ borderRadius: "16px", width: '100%', height: '80%' }} />
                            </Col>




                            <Col style={{ alignContent: 'center', paddingTop: '5rem', paddingLeft: 'rem' }}>
                                <div style={{ width: '60%', textAlign: 'center', backgroundColor: 'orange', borderRadius: "8px" }} >
                                    <h2 style={{ textAlign: 'center', color: 'white' }}>Register</h2>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group style={{ margin: '10px', paddingTop: '10px' }} controlId="username">
                                            <Form.Label></Form.Label>
                                            <Form.Control
                                                color='orange'
                                                type="text"
                                                placeholder="Enter user name"
                                                name="username"
                                                value={username}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group style={{ margin: '10px', paddingTop: '10px' }} controlId="password">
                                            <Form.Label></Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Enter password"
                                                name="password"
                                                value={password}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group style={{ margin: '10px', paddingTop: '10px' }} controlId="rePassword">
                                            <Form.Label></Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Re-enter password"
                                                name="rePassword"
                                                value={rePassword}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group style={{ margin: '10px', paddingTop: '10px' }} controlId="emailOrPhone">
                                            <Form.Label></Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter email or phone number"
                                                name="emailOrPhone"
                                                value={emailOrPhone}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <FormGroup style={{ paddingTop: '20px', paddingBottom: '10px', marginLeft: '50px' }} controlId="agreePolicy">
                                            <FormCheck
                                                checked={agreePolicy}
                                                label="I agree with the policy"
                                                type="checkbox"
                                                name="agreePolicy"
                                                onChange={handleChange}
                                            />
                                        </FormGroup>

                                        <Button style={{ marginBottom: '30px' }} variant="light" type="submit">
                                            Register
                                        </Button>
                                    </Form>

                                </div>
                            </Col>


                        </Row>
                    </Col>
                </div>
            </Container>
        </div>
    )
}
export default Register;