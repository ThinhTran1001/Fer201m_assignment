import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

import "./css/style-order-tracking.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function OrderTracking() {
  let user = JSON.parse(localStorage.getItem("user"));

  const [order, setOrder] = useState([]);
  const [items, setItems] = useState([]);

  const fetchOrderByUser = async () => {
    console.log(user.id);

    try {
      const res = await axios.get(
        `http://localhost:9999/order?userId=${user.id}&status=Ordered&status=Shipped&status=Delivered`
      );

      console.log(res.data[res.data.length - 1]);
      setOrder(res.data[res.data.length - 1]);
      setItems(res.data[res.data.length - 1].item);
    } catch (err) {}
  };

  useEffect(() => {
    fetchOrderByUser();
  }, []);

  function formatPrice(price) {
    price = (price + "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    price = price + " VND";

    return price;
  }

  if (!order)
    return (
      <Container>
        <Row>
          <Alert
            variant="danger"
            style={{
              margin: "150px 40px",
              height: "90px",
              fontSize: "2.5rem",
            }}
          >
            Bạn chưa thực hiện order náof!{" "}
            <Link to={"/"}>Quay lại Shop để mua hàng! 🛒💻📱</Link>
          </Alert>
        </Row>
      </Container>
    );

  if (order)
    return (
      <>
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="8" xl="6">
                <MDBCard className="border-top border-bottom border-3 border-color-custom">
                  <MDBCardBody className="p-5">
                    <p
                      className="lead fw-bold mb-5"
                      style={{ color: "#f37a27" }}
                    >
                      Purchase Reciept
                    </p>

                    <MDBRow>
                      <MDBCol className="mb-3">
                        <p className="small text-muted mb-1">Date</p>
                        <p>{order.orderAt}</p>
                      </MDBCol>
                      <MDBCol className="mb-3">
                        <p className="small text-muted mb-1">Order No.</p>
                        <p>{order.id}</p>
                      </MDBCol>
                    </MDBRow>

                    <div
                      className="mx-n5 px-3 py-2"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      {items.map((item) => (
                        <MDBRow>
                          <MDBCol md="2">
                            <img
                              src={item.img}
                              alt=""
                              style={{ width: "100%" }}
                            ></img>
                          </MDBCol>
                          <MDBCol md="3">
                            <p>{item.name}</p>
                          </MDBCol>
                          <MDBCol md="3">
                            <p>Quantity: {item.quantity}</p>
                          </MDBCol>
                          <MDBCol md="4">
                            <p>{formatPrice(item.price)} / 1</p>
                          </MDBCol>
                        </MDBRow>
                      ))}
                    </div>
                    <MDBRow className="my-3">
                      <MDBCol
                        md="4"
                        className="offset-md-8 col-lg-5 offset-lg-7"
                      >
                        <p
                          className="lead fw-bold mb-0"
                          style={{ color: "#f37a27", fontSize: "1.25rem" }}
                        >
                          {order.total}
                        </p>
                      </MDBCol>
                    </MDBRow>
                    <p
                      className="lead fw-bold mb-4 pb-2"
                      style={{ color: "#f37a27" }}
                    >
                      Tracking Order
                    </p>

                    <MDBRow>
                      <MDBCol lg="12">
                        <div className="horizontal-timeline">
                          <ul className="list-inline items d-flex justify-content-between">
                            {order.status === "Ordered" && (
                              <li className="list-inline-item items-list">
                                <p
                                  className="py-1 px-2 rounded text-white"
                                  style={{ backgroundColor: "#f37a27" }}
                                >
                                  Ordered
                                </p>
                              </li>
                            )}
                            <li className="list-inline-item items-list">
                              <p
                                className="py-1 px-2 rounded text-white"
                                style={{ backgroundColor: "#f37a27" }}
                              >
                                Shipped
                              </p>
                            </li>
                            <li
                              className="list-inline-item items-list text-end"
                              style={{ marginRight: "-8px" }}
                            >
                              <p style={{ marginRight: "-8px" }}>Delivered</p>
                            </li>
                          </ul>
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <p className="mt-4 pt-2 mb-0">
                      Want any help?{" "}
                      <a href="#!" style={{ color: "#f37a27" }}>
                        Please contact us
                      </a>
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </>
    );
}
