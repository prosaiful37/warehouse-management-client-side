import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mony from '../../../images/FooterImage/py1.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
  return (
    <div className="bg-dark mt-5">
      <Container className="py-3">
        <Row className="d-">
          <Col xs={12} md={8}>
            <p className="text-center text-white">
              <small>Copywrite © {year} All rights reserved.</small>
            </p>
          </Col>
          <Col xs={6} md={4}>
            <img className='w-50  img-fluid' src={mony} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
