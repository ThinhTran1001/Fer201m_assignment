/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import {
  Row,
  Nav,
  Container,
  Form,
  Button,
  ButtonGroup,
  ButtonToolbar
} from "react-bootstrap";
import logo from "../assets/img/imageLogo.png";
import {
  faMobile,
  faLaptop,
  faTablet,
  faSearch,
  faTruck,
  faShoppingCart,
  faHeadphones,
  faDesktop
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
     
      {/* <Row
        className="text-white"
        style={{
          justifyContent: "left",
          backgroundColor: "#DA6F22",
          height: "120px",
        }}
      >
        <Container>
          <Nav className="justify-content-start" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/" style={{ color: "white", fontSize: "30px" }}>
                JSPhone
                <img
                  src={logo}
                  style={{ width: "30px", height: "30px", margin: "10px" }}
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
            
            <Nav.Item style={{ marginTop: "20px", marginLeft: "auto", marginRight:'40px'}}>

       
          <Button style={{marginRight:'10px',backgroundColor:'#DA4E22' }}>
          <FontAwesomeIcon icon={faTruck} style={{ marginRight: "5px", color:'black' }} />  
          Tra cứu đơn hàng</Button>{' '}
          <Button style={{marginRight:'10px',  backgroundColor: '#DA4E22' }}>
          <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: "5px", color:'black' }} />
           Giỏ hàng</Button>{' '}
          <Button style={{marginRight:'10px',  backgroundColor: '#DA4E22' }}>Đăng nhập</Button>{' '}
          <Button style={{marginRight:'10px',  backgroundColor: '#DA4E22' }}>Đăng ký</Button>
        
    
            </Nav.Item>
              
            
          </Nav>

         
          <Nav
  justify
  variant="tabs"
  defaultActiveKey="/home"
  style={{ marginTop: "10px" }}
>
  <Nav.Item>
    <Nav.Link href="/home" style={{ color: "black" }}>
      <FontAwesomeIcon icon={faMobile} style={{ marginRight: "5px" }} />
      Điện thoại{" "}
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" style={{ color: "black" }}>
      <FontAwesomeIcon icon={faLaptop} style={{ marginRight: "5px" }} />
      Laptop
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2" style={{ color: "black" }}>
      <FontAwesomeIcon icon={faTablet} style={{ marginRight: "5px" }} />
      Tablet
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3" style={{ color: "black" }}>
      <FontAwesomeIcon icon={faHeadphones} style={{ marginRight: "5px" }} />
      Phụ kiện
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-4" style={{ color: "black" }}>
      <FontAwesomeIcon icon={faDesktop} style={{ marginRight: "5px" }} />
      PC, Màn hình
    </Nav.Link>
  </Nav.Item>
</Nav>
        </Container>
      </Row> */}
       {/* <Row className="text-white" style={{ justifyContent: "left", backgroundColor: "#DA6F22", height: "120px" }}>
      <Container>
        <Nav className="justify-content-start" >
          <Nav.Item>
            <Nav.Link href="/" style={{ color: "white", fontSize: "30px" }}>
              JSPhone
              <img src={logo} style={{ width: "30px", height: "30px", margin: "10px" }} alt="logo" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ marginTop: "15px", marginLeft: "50px", width: "350px" }}>
            <Form.Control type="text" placeholder="Search" />
          </Nav.Item>
          <Nav.Item style={{ marginTop: "25px", marginLeft: "10px" }}>
            <FontAwesomeIcon icon={faSearch} style={{ color: "black" }} />
          </Nav.Item>
          <Nav.Item style={{ marginTop: "20px", marginLeft: "auto", marginRight: "40px" }}>
            
              <Button style={{ marginRight: '10px', backgroundColor: '#DA4E22'}}>
                <FontAwesomeIcon icon={faTruck} style={{ marginRight: "5px", color: 'black'  }} /> Tra cứu đơn hàng
              </Button>
              <Button style={{ marginRight: '10px', backgroundColor: '#DA4E22'}}>
                <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: "5px", color: 'black' }} /> Giỏ hàng
              </Button>
              <Button style={{ marginRight: '10px', backgroundColor: '#DA4E22'}}>Đăng nhập</Button>
              <Button style={{ marginRight: '10px', backgroundColor: '#DA4E22'   }}>Đăng ký</Button>
            
          </Nav.Item>
        </Nav>
        <Nav justify variant="tabs" defaultActiveKey="/home" style={{ marginTop: "10px" }}>
          <Nav.Item>
            <Nav.Link href="/home" style={{ color: "black" }}>
              <FontAwesomeIcon icon={faMobile} style={{ marginRight: "5px" }} /> Điện thoại
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" style={{ color: "black" }}>
              <FontAwesomeIcon icon={faLaptop} style={{ marginRight: "5px" }} /> Laptop
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" style={{ color: "black" }}>
              <FontAwesomeIcon icon={faTablet} style={{ marginRight: "5px" }} /> Tablet
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" style={{ color: "black" }}>
              <FontAwesomeIcon icon={faHeadphones} style={{ marginRight: "5px" }} /> Phụ kiện
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4" style={{ color: "black" }}>
              <FontAwesomeIcon icon={faDesktop} style={{ marginRight: "5px" }} /> PC, Màn hình
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Row> */}
   <Row className="text-white" style={{ justifyContent: "left", backgroundColor: "#DA6F22", height: "120px" }}>
  <Container>
    <Nav className="justify-content-start">
      <Nav.Item>
        <Nav.Link href="/" style={{ color: "white", fontSize: "30px" }}>
          JSPhone
          <img src={logo} style={{ width: "30px", height: "30px", margin: "10px" }} alt="logo" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item style={{ marginTop: "15px", marginLeft: "50px", width: "350px" }}>
        <Form.Control type="text" placeholder="Search" />
      </Nav.Item>
      <Nav.Item style={{ marginTop: "25px", marginLeft: "10px" }}>
        <FontAwesomeIcon icon={faSearch} style={{ color: "black" }} />
      </Nav.Item>
      <Nav.Item style={{ marginTop: "20px", marginLeft: "auto", marginRight: "40px" }}>
        <a href="/tra-cuu-don-hang" style={{ textDecoration: "none" }}>
          <Button style={{ marginRight: '10px', backgroundColor: '#DA4E22'}}>
            <FontAwesomeIcon icon={faTruck} style={{ marginRight: "5px", color: 'black'  }} /> Tra cứu đơn hàng
          </Button>
        </a>
        <a href="/gio-hang" style={{ textDecoration: "none" }}>
          <Button style={{ marginRight: '10px', backgroundColor: '#DA4E22'}}>
            <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: "5px", color: 'black' }} /> Giỏ hàng
          </Button>
        </a>
        <a href="/dang-nhap" style={{ textDecoration: "none" }}>
          <Button style={{ marginRight: '10px', backgroundColor: '#DA4E22'}}>Đăng nhập</Button>
        </a>
        <a href="/dang-ky" style={{ textDecoration: "none" }}>
          <Button style={{ marginRight: '10px', backgroundColor: '#DA4E22' }}>Đăng ký</Button>
        </a>
      </Nav.Item>
    </Nav>
    <Nav justify variant="tabs" defaultActiveKey="/home" style={{ marginTop: "10px" }}>
      <Nav.Item>
        <Nav.Link href="/dien-thoai" style={{ color: "black" }}>
          <FontAwesomeIcon icon={faMobile} style={{ marginRight: "5px" }} /> Điện thoại
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/laptop" style={{ color: "black" }}>
          <FontAwesomeIcon icon={faLaptop} style={{ marginRight: "5px" }} /> Laptop
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/tablet" style={{ color: "black" }}>
          <FontAwesomeIcon icon={faTablet} style={{ marginRight: "5px" }} /> Tablet
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/phu-kien" style={{ color: "black" }}>
          <FontAwesomeIcon icon={faHeadphones} style={{ marginRight: "5px" }} /> Phụ kiện
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/pc-man-hinh" style={{ color: "black" }}>
          <FontAwesomeIcon icon={faDesktop} style={{ marginRight: "5px" }} /> PC, Màn hình
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Container>
</Row>
    </>
  );
};
export default Header;
