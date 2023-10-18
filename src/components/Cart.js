import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  Row,
} from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <Container style={{ marginTop: "3rem" }}>
        <Row style={{ marginBottom: "3rem" }}>
          <Col>
            <h2>My Cart</h2>
          </Col>
        </Row>
        <Row>
          {/* Left Phone Detail */}
          <Col>
            {/* Items 1 */}
            <Row style={{ marginBottom: "5rem" }}>
              <Col xs={6} md={4}>
                <Image src="./images/cart/ip13@2x.png" thumbnail />
              </Col>
              <Col>
                <h4 style={{ marginBottom: "3rem" }}>iPhone 13 128GB</h4>
                <Row>
                  <Col>
                    <h6>Color:</h6>
                  </Col>
                  <Col>
                    <h6>Pink</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>Quantity:</h6>
                  </Col>
                  <Col>
                    <h6>1</h6>
                  </Col>
                </Row>
                <Row style={{ marginTop: "4.5rem" }}>
                  <Col>
                    <h4>16.090.000đ</h4>
                  </Col>
                  <Col>
                    <Image
                      src="./images/cart/button.svg"
                      style={{
                        borderRadius: "8px",
                        height: " 2.5rem",
                      }}
                    ></Image>
                  </Col>
                  <Col>
                    <Image
                      src="./images/cart/heart.svg"
                      style={{
                        height: " 2.5rem",
                      }}
                    ></Image>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* Items 2 */}
            <Row>
              <Col xs={6} md={4}>
                <Image src="./images/cart/ip13@2x.png" thumbnail />
              </Col>
              <Col>
                <h4 style={{ marginBottom: "3rem" }}>iPhone 13 128GB</h4>
                <Row>
                  <Col>
                    <h6>Color:</h6>
                  </Col>
                  <Col>
                    <h6>Pink</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>Quantity:</h6>
                  </Col>
                  <Col>
                    <h6>1</h6>
                  </Col>
                </Row>
                <Row style={{ marginTop: "4.5rem" }}>
                  <Col>
                    <h4>16.090.000đ</h4>
                  </Col>
                  <Col>
                    <Image
                      src="./images/cart/button.svg"
                      style={{
                        borderRadius: "8px",
                        height: " 2.5rem",
                      }}
                    ></Image>
                  </Col>
                  <Col>
                    <Image
                      src="./images/cart/heart.svg"
                      style={{
                        height: " 2.5rem",
                      }}
                    ></Image>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          {/* Right Phone Detail */}
          <Col>
            <Row>
              <div
                style={{
                  height: "30%",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ width: "90%", marginBottom: "2rem" }}>
                  <h4
                    style={{
                      textAlign: "center",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                    }}
                  >
                    Have a Coupon?
                  </h4>

                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Input your email here"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder=""
                      style={{
                        height: "100px",
                        borderColor: "#F86338",
                      }}
                    />
                  </FloatingLabel>
                  <Button
                    style={{
                      marginTop: "1.5rem",
                      padding: "0.7rem",
                      borderColor: "#F86338",
                      backgroundColor: "#F86338",
                    }}
                  >
                    Danger
                  </Button>
                </div>
              </div>
            </Row>

            <Row
              style={{
                marginTop: "1.5rem",
              }}
            >
              <Row style={{ marginLeft: "1rem" }}>
                <h4>Cart Totals</h4>
                <Row
                  style={{
                    marginTop: "1.2rem",
                  }}
                >
                  <Col>
                    <h6>Subtotal</h6>
                  </Col>
                  <Col>
                    <h6>32,180,000đ</h6>
                  </Col>
                  <Col></Col>
                </Row>
                <Row
                  style={{
                    marginTop: "1.2rem",
                  }}
                >
                  <Col>
                    <h6>Shipping</h6>
                  </Col>
                  <Col>
                    <h6>Free Shpping</h6>
                  </Col>
                  <Col></Col>
                </Row>
                <Row
                  style={{
                    marginTop: "1.2rem",
                  }}
                >
                  <Col> </Col>
                  <Col>
                    <h6>Shipping to Hanoi</h6>
                  </Col>
                  <Col style={{ color: "#F86338" }}>
                    <h6>Change</h6>
                  </Col>
                </Row>
                <Row
                  style={{
                    marginTop: "1.2rem",
                  }}
                >
                  <Col>
                    <h6>Subtotal</h6>
                  </Col>
                  <Col>
                    <h6>32,180,000đ</h6>
                  </Col>
                  <Col></Col>
                </Row>
              </Row>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Row style={{ width: "95%" }}>
                  <Button
                    style={{
                      marginTop: "1.5rem",
                      padding: "0.7rem",
                      borderColor: "#F86338",
                      backgroundColor: "#F86338",
                    }}
                  >
                    Checkout
                  </Button>
                </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
