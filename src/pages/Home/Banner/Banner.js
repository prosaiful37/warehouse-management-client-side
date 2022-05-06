import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import banner1 from "../../../images/banner/03_slider-image.jpg";
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Container className="slider mt-5">
        <Carousel>
          <Carousel.Item>
            <Row className="d-flex align-items-center">
              <Col xs={6} md={6}>
                <img
                  className="d-block w-100 img-fluid"
                  src={banner1}
                  alt="First slide"
                />
              </Col>
              <Col xs={6} md={6}>
                <div className="slider-details">
                  <h3>Best Perfume</h3>
                  <p>
                    pens with a note of black pepper to bring in some spice, but
                    additional top notes include lemon and bergamot.{" "}
                  </p>
                  <Button variant="outline-danger">Shop Now</Button>{" "}
                </div>

                <Carousel.Caption className="slider-car"></Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="d-flex align-items-center">
              <Col xs={6} md={6}>
                <img
                  className="d-block w-100 img-fluid"
                  src={banner2}
                  alt="First slide"
                />
              </Col>
              <Col xs={6} md={6}>
                <div className="slider-details">
                  <h3>Fragrances</h3>
                  <p>
                    pens with a note of black pepper to bring in some spice, but
                    additional top notes include lemon and bergamot.{" "}
                  </p>
                  <Button variant="outline-danger">Shop Now</Button>{" "}
                </div>

                <Carousel.Caption className="slider-car"></Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="d-flex align-items-center">
              <Col xs={6} md={6}>
                <img
                  className="d-block w-100 img-fluid"
                  src={banner3}
                  alt="First slide"
                />
              </Col>
              <Col xs={6} md={6}>
                <div className="slider-details">
                  <h3>Brand Perfume</h3>
                  <p>
                    pens with a note of black pepper to bring in some spice, but
                    additional top notes include lemon and bergamot.{" "}
                  </p>
                  <Button variant="outline-danger">Shop Now</Button>{" "}
                </div>

                {/* <Carousel.Caption className="bg-dark"></Carousel.Caption> */}
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Banner;
