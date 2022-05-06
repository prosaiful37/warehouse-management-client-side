import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./FeaturesProduct.css";

const FeaturesProduct = () => {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col xs={6}>
            <div className="home-banner p-5 h-100">
              <h2 className="my-3">Best price</h2>
              <h4  className="my-3">Perfume Flower Collection</h4>
              <Button  className="my-3 px-3" variant="outline-dark">SHOP NOW</Button>
            </div>
          </Col>
          <Col xs={6}>
            <div className="home-banner2 p-5 h-100">
              <h2  className="my-3">New perfume</h2>
              <h4  className="my-3">Perfume Cool Collection</h4>
              <Button className="my-3 px-3" variant="outline-dark">SHOP NOW</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturesProduct;
