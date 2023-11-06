import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart() {
  let user = JSON.parse(localStorage.getItem("user"));

  const [cart, setCart] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const fetchCartByUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:9999/cart?userId=${user.id}`
      );
      console.log(res.data[0]);
      setCart(res.data[0]);
      setCartItem(res.data[0].item);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCartByUser();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <Container style={{ marginTop: "3rem" }}>
        {cart ? (
          <>
            <Row style={{ marginBottom: "3rem" }}>
              <Col>
                <h2>My Cart</h2>
              </Col>
            </Row>
            <Row>
              {/* Left Phone Detail */}
              <Col>
                {cartItem.map((item) => (
                  <Row style={{ marginBottom: "5rem" }}>
                    <Col xs={6} md={4}>
                      <Image src={item.img} thumbnail />
                    </Col>
                    <Col>
                      <h4 style={{ marginBottom: "3rem" }}>{item.name}</h4>
                      <Row>
                        <Col>
                          <h6>Quantity:</h6>
                        </Col>
                        <Col>
                          <h6>{item.quantity}</h6>
                        </Col>
                      </Row>
                      <Row style={{ marginTop: "4.5rem" }}>
                        <Col>
                          <h4>{item.price}</h4>
                        </Col>
                        <Col>
                          <Image
                            src="./images/cart/button.svg"
                            style={{
                              borderRadius: "8px",
                              height: " 2.2rem",
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
                ))}
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
                        Apply
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
                        <h6>Total</h6>
                      </Col>
                      <Col>
                        <h6>{cart.total}</h6>
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
          </>
        ) : (
          <Row>
            <Alert
              variant="danger"
              style={{
                margin: "150px 40px",
                height: "90px",
                fontSize: "2.5rem",
              }}
            >
              You cart is empty! <Link to={"/"}>Go to shop now 🛒💻📱</Link>
            </Alert>
          </Row>
        )}
      </Container>
    </div>
  );
}
