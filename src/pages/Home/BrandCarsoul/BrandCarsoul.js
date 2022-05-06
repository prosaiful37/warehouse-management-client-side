import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BrandCarsoul.css";
import b1 from "../../../images/Brand/b1.png";
import b2 from "../../../images/Brand/b2.png";
import b3 from "../../../images/Brand/b3.png";
import b4 from "../../../images/Brand/b4.png";
import b5 from "../../../images/Brand/b5.png";
import b6 from "../../../images/Brand/b6.png";

const BrandCarsoul = () => {
  return (
    <Container className="brandSlider">
        <div >
            <Row>
                <Col xs={6} md={2}>
                    <img src={b1} alt="" />
                </Col>
                <Col xs={6} md={2}>
                    <img src={b2} alt="" />
                </Col>
                <Col xs={6} md={2}>
                    <img src={b3} alt="" />
                </Col>
                <Col xs={6} md={2}>
                    <img src={b4} alt="" />
                </Col>
                <Col xs={6} md={2}>
                    <img src={b5} alt="" />
                </Col>
                <Col xs={6} md={2}>
                    <img src={b6} alt="" />
                </Col>
            </Row>
        </div>
      
    </Container>
  );
};

export default BrandCarsoul;
