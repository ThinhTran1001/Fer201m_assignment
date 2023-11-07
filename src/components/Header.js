/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import { Row, Nav, Container, Form, Button, Dropdown } from "react-bootstrap";
import logo from "../assets/img/imageLogo.png";
import {
  faMobile,
  faLaptop,
  faTablet,
  faSearch,
  faTruck,
  faShoppingCart,
  faHeadphones,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
const Header = ({ isLogin, setIsLogin }) => {
  let user;
  if (isLogin) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <>
      <Row
        className="text-white"
        style={{
          justifyContent: "left",
          backgroundColor: "#DA6F22",
          height: "120px",
        }}
      >
        <Container>
          <Nav className="justify-content-start">
            <Nav.Item>
              <Nav.Link href="/" style={{ color: "white", fontSize: "30px" }}>
                JSPhone
                <img
                  src={logo}
                  style={{ width: "30px", height: "30px", margin: "10px" }}
                  alt="logo"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              style={{ marginTop: "15px", marginLeft: "50px", width: "350px" }}
            >
              <Form.Control type="text" placeholder="Search" />
            </Nav.Item>
            <Nav.Item style={{ marginTop: "25px", marginLeft: "10px" }}>
              <FontAwesomeIcon icon={faSearch} style={{ color: "black" }} />
            </Nav.Item>
            <Nav.Item
              style={{
                marginTop: "20px",
                marginLeft: "auto",
                marginRight: "40px",
              }}
            >
              {isLogin && (
                <>
                  <Link
                    to="/tra-cuu-don-hang"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      style={{
                        marginRight: "10px",
                        backgroundColor: "#DA4E22",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faTruck}
                        style={{ marginRight: "5px", color: "black" }}
                      />{" "}
                      Tra cứu đơn hàng
                    </Button>
                  </Link>
                  <Link to={"cart"} style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        marginRight: "10px",
                        backgroundColor: "#DA4E22",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        style={{ marginRight: "5px", color: "black" }}
                      />{" "}
                      Giỏ hàng
                    </Button>
                  </Link>
                </>
              )}

              {isLogin ? (
                <Dropdown as={"span"}>
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    style={{ backgroundColor: "#DA4E22" }}
                  >
                    {user.name} <AccountCircleIcon />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/view-profile">
                      View Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="#/change-password">
                      Change Password
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>
                      Log Out
                    </Dropdown.Item>
                  </Dropdown.Menu>  
                </Dropdown>
              ) : (
                <>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        marginRight: "10px",
                        backgroundColor: "#DA4E22",
                      }}
                    >
                      Đăng nhập
                    </Button>
                  </Link>
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        marginRight: "10px",
                        backgroundColor: "#DA4E22",
                      }}
                    >
                      Đăng ký
                    </Button>
                  </Link>
                </>
              )}
            </Nav.Item>
          </Nav>
          <Nav
            justify
            variant="tabs"
            defaultActiveKey="/home"
            style={{ marginTop: "10px" }}
          >
            <Nav.Item>
              <Nav.Link href="/dien-thoai" style={{ color: "black" }}>
                <FontAwesomeIcon
                  icon={faMobile}
                  style={{ marginRight: "5px" }}
                />{" "}
                Điện thoại
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/laptop" style={{ color: "black" }}>
                <FontAwesomeIcon
                  icon={faLaptop}
                  style={{ marginRight: "5px" }}
                />{" "}
                Laptop
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/tablet" style={{ color: "black" }}>
                <FontAwesomeIcon
                  icon={faTablet}
                  style={{ marginRight: "5px" }}
                />{" "}
                Tablet
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/phu-kien" style={{ color: "black" }}>
                <FontAwesomeIcon
                  icon={faHeadphones}
                  style={{ marginRight: "5px" }}
                />{" "}
                Phụ kiện
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/pc-man-hinh" style={{ color: "black" }}>
                <FontAwesomeIcon
                  icon={faDesktop}
                  style={{ marginRight: "5px" }}
                />{" "}
                PC, Màn hình
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Row>
    </>
  );
};
export default Header;
