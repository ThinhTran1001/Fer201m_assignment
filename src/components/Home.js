import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card, Button, Image } from "react-bootstrap";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";


import { Snackbar, SnackbarContent, IconButton } from "@mui/material";
import { Link } from "react-router-dom";


export default function Home() {
  const [product, setProduct] = useState([]);

  let user = JSON.parse(localStorage.getItem("user"));

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

  const [cartItemForm, setCartItemForm] = useState({
    name: "",
    img: "",
    price: "",
    quantity: 0,
  });

  const calculateTotal = (items) => {
    let total = 0;
    for (const item of items) {
      total += item.price * item.quantity;
    }
    return total;
  };

  const fetchCartByUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:9999/cart?userId=${user.id}`
      );
      const fetchedCart = res.data[0];

      // Calculate the total for the fetched cart
      const fetchedTotal = calculateTotal(fetchedCart.item);
      fetchedCart.total = formatPrice(fetchedTotal);

      setCart(fetchedCart);
      setCartItem(fetchedCart.item);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCartByUser();
  }, []);

  const handleAddProductToCart = async (product) => {
    if (cart) {
      // Cart exists, update the existing cart
      const updatedCart = { ...cart };
      const updatedItem = [...cartItem];
      const existingProduct = updatedItem.find(
        (item) => item.name === product.name
      );

      if (existingProduct) {
        // Product already exists in the cart, update its quantity
        existingProduct.quantity += 1;
      } else {
        // Product does not exist in the cart, add it to the cart
        updatedItem.push({
          name: product.name,
          quantity: 1,
          price: product.price,
          img: product.img,
        });
      }

      updatedCart.item = updatedItem;

      // Calculate the total
      const updatedTotal = calculateTotal(updatedItem);
      updatedCart.total = formatPrice(updatedTotal);

      try {
        await axios.put(`http://localhost:9999/cart/${cart.id}`, updatedCart);
        setCart(updatedCart);
        setCartItem(updatedItem);
        showSnackbar("Sản phẩm đã được thêm vào giỏ hàng 🛒.");
      } catch (err) {
        console.log(err);
      }
    } else {
      // Cart doesn't exist, create a new cart
      try {
        const newCart = {
          userId: user.id,
          item: [
            {
              name: product.name,
              quantity: 1,
              price: product.price,
              img: product.img,
            },
          ],
          total: product.price,
        };
        const response = await axios.post(
          `http://localhost:9999/cart`,
          newCart
        );
        setCart(response.data);
        setCartItem(newCart.item);
        showSnackbar("Sản phẩm đã được thêm vào giỏ hàng 🛒.");
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRes = await axios.get("http://localhost:9999/product");
        setProduct(productRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  function formatPrice(price) {
    price = (price + "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    price = price + " VND";

    return price;
  }
  return (
    <div style={{ marginTop: "25px" }}>
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
      <div>
        <Image
          src="./images/product/iphone-14-cover-banner-2.webp"
          style={{ width: "100%", height: "450px" }}
        ></Image>
      </div>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col md={6}>
            <Button
              style={{
                backgroundColor: "rgb(220, 100, 11)",
                color: "white",
                fontWeight: "bolder",
              }}
              variant="outline-warning"
            >
              ĐIỆN THOẠI NỔI BẬT NHẤT
            </Button>
          </Col>

          <Col md={6}>
            <Row>
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(220, 100, 11)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                  variant="outline-warning"
                >
                  Apple
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(220, 100, 11)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                  variant="outline-warning"
                >
                  Samsung
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(220, 100, 11)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                  variant="outline-warning"
                >
                  Xiaomi
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(220, 100, 11)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                  variant="outline-warning"
                >
                  OPPO
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(220, 100, 11)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                  variant="outline-warning"
                >
                  Xem Tất Cả
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "5px", display: "flex" }}>
          {product
            .slice(0, 8)
            .filter((p) => p.categoryId === 1)
            .map((filteredProduct) => {
              return (
                <Col xs={12} sm={6} md={3} style={{ marginTop: "15px" }}>
                  <Card
                    className="hover:-translate-y-2"
                    style={{ width: "18rem", textAlign: "center" }}
                  >
                    <Card.Img
                      style={{ height: "290px" }}
                      src={filteredProduct.img}
                    />
                    <Card.Body>
                      <Card.Title style={{ textAlign: "center" }}>
                        {filteredProduct.name}
                      </Card.Title>
                      <Card.Text>
                        <Row>
                          <Col>{formatPrice(filteredProduct.price)}</Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                          <Link to={`/product/detail/${filteredProduct.id}`}>
                            <Button
                              style={{
                                backgroundColor: "rgb(220, 100, 11)",
                                color: "white",
                                fontWeight: "bolder",
                                fontSize: "14px",
                              }}
                              variant="outline-warning"
                            >
                              Detail
                            </Button>
                            </Link>
                          </Col>
                          <Col md={6}>
                            <Button
                              style={{
                                backgroundColor: "rgb(220, 100, 11)",
                                color: "white",
                                fontWeight: "bolder",
                                fontSize: "14px",
                              }}
                              variant="outline-warning"
                              onClick={() =>
                                handleAddProductToCart(filteredProduct)
                              }
                            >
                              Add To Cart
                            </Button>
                          </Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
        <Row style={{ marginTop: "45px" }}>
          <Col md={6}>
            <Button
              style={{
                backgroundColor: "rgb(220, 100, 11)",
                color: "white",
                fontWeight: "bolder",
              }}
              variant="outline-warning"
            >
              LAPTOP GAMING
            </Button>
          </Col>
          <Col md={6}>
            <Row>
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(220, 100, 11)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                  variant="outline-warning"
                >
                  Asus
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(220, 100, 11)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                  variant="outline-warning"
                >
                  Acer
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(220, 100, 11)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                  variant="outline-warning"
                >
                  MSI
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(220, 100, 11)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                  variant="outline-warning"
                >
                  HP
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(220, 100, 11)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                  variant="outline-warning"
                >
                  Xem Tất Cả
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "1px", display: "flex" }}>
          {product
            .filter((p) => p.categoryId === 5)
            .slice(0, 8)
            .map((filteredProduct) => {
              return (
                <Col xs={12} sm={6} md={3} style={{ marginTop: "15px" }}>
                  <Card style={{ width: "18rem", textAlign: "center" }}>
                    <Card.Img
                      hover
                      style={{ height: "280px" }}
                      src={filteredProduct.img}
                    />
                    <Card.Body>
                      <Card.Title
                        style={{ textAlign: "center", fontSize: "15px" }}
                      >
                        {filteredProduct.name}
                      </Card.Title>
                      <Card.Text>
                        <Row>
                          <Col>{formatPrice(filteredProduct.price)}</Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <Link to={`/product/detail/${filteredProduct.id}`}>
                            <Button
                              style={{
                                backgroundColor: "rgb(220, 100, 11)",
                                color: "white",
                                fontWeight: "bolder",
                                fontSize: "14px",
                              }}
                              variant="outline-warning"
                            >
                              Detail
                            </Button>
                            </Link>
                          </Col>
                          <Col md={6}>
                            <Button
                              style={{
                                backgroundColor: "rgb(220, 100, 11)",
                                color: "white",
                                fontWeight: "bolder",
                                fontSize: "14px",
                              }}
                              variant="outline-warning"
                            >
                              Add To Cart
                            </Button>
                          </Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
        <Row style={{ marginTop: "45px" }}>
          <Col md={6}>
            <Button
              style={{
                backgroundColor: "rgb(220, 100, 11)",
                color: "white",
                fontWeight: "bolder",
              }}
              variant="outline-warning"
            >
              TABLET
            </Button>
          </Col>
          <Col md={6}>
            <Row>
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(220, 100, 11)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                  variant="outline-warning"
                >
                  Apple
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(220, 100, 11)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                  variant="outline-warning"
                >
                  Samsung
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(220, 100, 11)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                  variant="outline-warning"
                >
                  Lenovo
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(220, 100, 11)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                  variant="outline-warning"
                >
                  OPPO
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(220, 100, 11)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                  variant="outline-warning"
                >
                  Xem Tất Cả
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "1px", display: "flex" }}>
          {product
            .filter((p) => p.categoryId === 4)
            .slice(0, 8)
            .map((filteredProduct) => {
              return (
                <Col xs={12} sm={6} md={3} style={{ marginTop: "15px" }}>
                  <Card style={{ width: "18rem", textAlign: "center" }}>
                    <Card.Img
                      hover
                      style={{ height: "280px" }}
                      src={filteredProduct.img}
                    />
                    <Card.Body>
                      <Card.Title
                        style={{ textAlign: "center", fontSize: "15px" }}
                      >
                        {filteredProduct.name}
                      </Card.Title>
                      <Card.Text>
                        <Row>
                          <Col>{formatPrice(filteredProduct.price)}</Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                          <Link to={`/product/detail/${filteredProduct.id}`}>
                            <Button
                              style={{
                                backgroundColor: "rgb(220, 100, 11)",
                                color: "white",
                                fontWeight: "bolder",
                                fontSize: "14px",
                              }}
                              variant="outline-warning"
                            >
                              Detail
                            </Button>
                            </Link>
                          </Col>
                          <Col md={6}>
                            <Button
                              style={{
                                backgroundColor: "rgb(220, 100, 11)",
                                color: "white",
                                fontWeight: "bolder",
                                fontSize: "14px",
                              }}
                              variant="outline-warning"
                            >
                              Add To Cart
                            </Button>
                          </Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}
