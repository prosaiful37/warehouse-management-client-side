import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Blog.css';

import blog1 from '../../images/Blogs/blog1.png'
import blog2 from '../../images/Blogs/blog2.png'
import blog3 from '../../images/Blogs/blog3.png'


const Blogs = () => {
  return (
    <Container>
        <div className="blogSide mb-5">
            <h2 className="text-center p-5">Blog</h2>
        </div>
      <Row>
        <Col xs={12} md={8}>
          <div>
              <h3>01: Difference between javascript and nodejs</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At explicabo natus rerum iure accusamus? Eos corporis a eligendi tenetur saepe odit? Itaque voluptas laboriosam nemo aperiam sunt accusantium corporis esse!</p>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div>
              <img className="w-100 img-fluid" src={blog1} alt="" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <div>
              <h3>0.2: Differences between sql and nosql databases</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At explicabo natus rerum iure accusamus? Eos corporis a eligendi tenetur saepe odit? Itaque voluptas laboriosam nemo aperiam sunt accusantium corporis esse!</p>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div>
              <img className="w-100 img-fluid" src={blog1} alt="" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <div>
              <h3>0.3 What is the purpose of jwt and how does it work</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At explicabo natus rerum iure accusamus? Eos corporis a eligendi tenetur saepe odit? Itaque voluptas laboriosam nemo aperiam sunt accusantium corporis esse!</p>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div>
              <img className="w-100 img-fluid" src={blog3} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
