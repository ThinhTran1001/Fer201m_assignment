import React from 'react'
import { Col, Nav, Row, Image  } from 'react-bootstrap'
import google from "../assets/img/google.png";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/ins.png";
 function Footer() {
    return (
        <div>
            
            <Row className="text-white" style={{ justifyContent: "left", backgroundColor: "#DA6F22", height: "120px" }}>
            <h5 className="text-center mt-4 mb-4" style={{color:'black'}}>Contact Us: 1900 1001</h5>
                <Nav className="justify-content-between" >
                <Nav.Item className="d-flex mx-auto"> 
                    <img src={facebook} style={{ width: "30px", height: "30px", marginRight:'10px', marginBottom: '5px' }} alt="facebook" />
                    <img src={instagram} style={{ width: "30px", height: "30px", marginRight:'10px'}} alt="instagram" />
                    <img src={google} style={{ width: "30px", height: "30px"}} alt="google" />
                </Nav.Item>
            
                    </Nav>
                    
                </Row>
           
        </div>
    )
}

export default Footer