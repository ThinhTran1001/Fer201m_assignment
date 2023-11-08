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
import { Link, useNavigate } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import { Snackbar, SnackbarContent, IconButton } from "@mui/material";

export default function Cart() {
  let user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

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

  const handleDeleteItemFromCart = async (item) => {
    console.log("Delete item from cart");

    try {
      const updatedCart = cartItem.filter(
        (cartItem) => cartItem.name !== item.name
      );

      const updatedTotal = updatedCart.reduce((acc, currentItem) => {
        return formatPrice(acc + currentItem.price * currentItem.quantity);
      }, 0);

      const updatedCartData = {
        ...cart,
        item: updatedCart,
        total: updatedTotal,
      };

      // Gửi yêu cầu cập nhật giỏ hàng trong cơ sở dữ liệu

      await axios.put(`http://localhost:9999/cart/${cart.id}`, updatedCartData);

      showSnackbar(
        `Sản phẩm [ ${item.name} ] đã được xoá khỏi giỏ hàng của bạn ⛔.`
      );
      setCartItem(updatedCart);
      setCart({ ...cart, total: updatedTotal });

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (err) {}
  };

  const handleCheckout = async (cart) => {
    console.log("Checkout");
    console.log(cart);

    try {
      if (cart.item.length > 0) {
        // Tạo một đơn hàng mới
        const newOrder = {
          userId: cart.userId,
          item: cart.item,
          total: cart.total,
          address: user.address,
          shipping: 0,
          status: "Ordered",
          orderAt: getCurrentDate(),
        };

        // Gửi đơn hàng mới lên cơ sở dữ liệu
        const response = await axios.post(
          "http://localhost:9999/order",
          newOrder
        );

        // Sau khi đơn hàng được tạo thành công, bạn có thể xoá sản phẩm từ giỏ hàng
        await axios.put(`http://localhost:9999/cart/${cart.id}`, {
          ...cart,
          item: [],
          total: "0",
        });

        showSnackbar(
          `Thanh toán thành công! Kiểm tra tình trạng đơn hàng trong mục 🚚 Tra cứu đơn hàng`
        );

        setTimeout(() => {
          navigate("/order-tracking");
        }, 5000);
      } else {
        showSnackbar(
          `Không có sản phẩm nào để thanh toán, hãy quay lại Shop và chọn mua hàng! 🛒`
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCartByUser();
  }, []);

  function getCurrentDate() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function formatPrice(price) {
    price = (price + "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    price = price + " VND";

    return price;
  }

  return (
    <div style={{ padding: "40px" }}>
      {/* Snackbar start */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={closeSnackbar}
      >
        <SnackbarContent
          message={snackbarMessage}
          action={
            <IconButton size="small" color="inherit" onClick={closeSnackbar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
          style={{
            backgroundColor: "#4E9A51",
            color: "#fff",
            fontWeight: "bold",
          }}
        />
      </Snackbar>

      {/* Snackbar end */}
      <Container style={{ marginTop: "3rem" }}>
        {cart.item ? (
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
                  <Row style={{ marginBottom: "5rem" }} key={item.name}>
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
                        <Col md={6}>
                          <h4>{formatPrice(item.price)} / 1</h4>
                        </Col>
                        <Col>
                          <Image
                            onClick={() => handleDeleteItemFromCart(item)}
                            src="./images/cart/button.svg"
                            style={{
                              borderRadius: "8px",
                              height: " 2.2rem",
                              cursor: "pointer",
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
                        onClick={() => handleCheckout(cart)}
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
