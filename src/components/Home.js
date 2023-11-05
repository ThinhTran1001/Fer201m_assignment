import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import axios from "axios";

export default function Home() {
  const [product, setProduct] = useState([]);
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

  return (
    <div style={{ marginTop: "25px" }}>
      <Container>
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
                          <Col>{filteredProduct.price}</Col>
                        </Row>
                        <Row>
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
                              Detail
                            </Button>
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
                          <Col>{filteredProduct.price}</Col>
                        </Row>
                        <Row>
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
                              Detail
                            </Button>
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
                          <Col>{filteredProduct.price}</Col>
                        </Row>
                        <Row>
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
                              Detail
                            </Button>
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
