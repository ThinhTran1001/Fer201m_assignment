import React from 'react'
import { Col, Container, Row, Card, Image, Button } from 'react-bootstrap'

export default function Home() {
    return (
        <div style={{ marginTop: '15px' }}>
            <Container>
                <Row>
                    <Col md={6}><Button style={{ backgroundColor: 'rgb(220, 100, 11)', color: 'white', fontWeight: 'bolder' }} variant="outline-warning">ĐIỆN THOẠI NỔI BẬT NHẤT</Button></Col>

                    <Col md={6}>
                        <Row>
                            <Col><Button style={{ backgroundColor: 'rgb(220, 100, 11)', color: 'white', fontWeight: 'bolder', fontSize: '14px' }} variant="outline-warning">Apple</Button></Col>
                            <Col><Button style={{ backgroundColor: 'rgb(220, 100, 11)', color: 'white', fontWeight: 'bolder', fontSize: '14px' }} variant="outline-warning">Samsung</Button></Col>
                            <Col><Button style={{ backgroundColor: 'rgb(220, 100, 11)', color: 'white', fontWeight: 'bolder', fontSize: '14px' }} variant="outline-warning">Xiaomi</Button></Col>
                            <Col><Button style={{ backgroundColor: 'rgb(220, 100, 11)', color: 'white', fontWeight: 'bolder', fontSize: '14px' }} variant="outline-warning">OPPO</Button></Col>
                            <Col><Button style={{ backgroundColor: 'rgb(220, 100, 11)', color: 'white', fontWeight: 'bolder', fontSize: '14px' }} variant="outline-warning">Xem Tất Cả</Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ marginTop: '5px' }}>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }} >
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img src="./images/product/iphone14.png" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Iphone 14 128GB </Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }}>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img src="./images/product/iphone13.png" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Iphone 13 128GB</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }}>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img src="./images/product/iphone14plus.png" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Iphone 14 Plus 128GB</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }}>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img src="./images/product/iphone13promax.png" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Iphone 13 Pro Max 256GB</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }}>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img style={{ width: '286px', height: '286px' }} src="./images/product/ssgs23ultra.png" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '16px' }}>Samsung Galaxy S23 Ultra 256GB</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }}>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img style={{ width: '286px', height: '286px' }} src="./images/product/ssgzflip5.png" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '16px' }}>Samsung Galaxy Z Flip 5 512GB</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }}>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img src="./images/product/iphone11promax.png" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Iphone 11 Pro Max 128GB</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }}>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img src="./images/product/iphone12pro.png" />
                            <Card.Body>
                                <Card.Title>Iphone 12 Pro 128GB</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginTop:'30px'}}>
                    <Col md={6}><Button style={{ backgroundColor: 'rgb(220, 100, 11)', color: 'white', fontWeight: 'bolder' }} variant="outline-warning">LAPTOP GAMING</Button></Col>
                    <Col md={6}>
                        <Row>
                            <Col><Button style={{ backgroundColor: 'rgb(220, 100, 11)', color: 'white', fontWeight: 'bolder', fontSize: '14px' }} variant="outline-warning">Asus</Button></Col>
                            <Col><Button style={{ backgroundColor: 'rgb(220, 100, 11)', color: 'white', fontWeight: 'bolder', fontSize: '14px' }} variant="outline-warning">Acer</Button></Col>
                            <Col><Button style={{ backgroundColor: 'rgb(220, 100, 11)', color: 'white', fontWeight: 'bolder', fontSize: '14px' }} variant="outline-warning">Dell</Button></Col>
                            <Col><Button style={{ backgroundColor: 'rgb(220, 100, 11)', color: 'white', fontWeight: 'bolder', fontSize: '14px' }} variant="outline-warning">HP</Button></Col>
                            <Col><Button style={{ backgroundColor: 'rgb(220, 100, 11)', color: 'white', fontWeight: 'bolder', fontSize: '14px' }} variant="outline-warning">Xem Tất Cả</Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ marginTop: '5px' }}>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }} >
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img src="./images/product/iphone14.png" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Iphone 14 128GB </Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }}>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img src="./images/product/iphone13.png" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Iphone 13 128GB</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }}>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img src="./images/product/iphone14plus.png" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Iphone 14 Plus 128GB</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }}>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img src="./images/product/iphone13promax.png" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Iphone 13 Pro Max 256GB</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }}>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img style={{ width: '286px', height: '286px' }} src="./images/product/ssgs23ultra.png" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '16px' }}>Samsung Galaxy S23 Ultra 256GB</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }}>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img style={{ width: '286px', height: '286px' }} src="./images/product/ssgzflip5.png" />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '16px' }}>Samsung Galaxy Z Flip 5 512GB</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }}>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img src="./images/product/iphone11promax.png" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Iphone 11 Pro Max 128GB</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} style={{ marginTop: '15px' }}>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img src="./images/product/iphone12pro.png" />
                            <Card.Body>
                                <Card.Title>Iphone 12 Pro 128GB</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>26.590.000đ</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}><Image src="./images/cart/heart.svg" style={{ height: " 1.5 rem" }}></Image></Col>
                                        <Col md={6}><Image src="./images/product/star.svg" style={{ height: " 25px", width: '25px' }}></Image></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}