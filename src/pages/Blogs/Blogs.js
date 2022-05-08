import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Blog.css';

import blog1 from '../../images/Blogs/blog1.png';
import blog2 from '../../images/Blogs/blog2.jpg';
import blog3 from '../../images/Blogs/blog3.png';


const Blogs = () => {
  return (
    <Container>
        <div className="blogSide mb-5">
            <h2 className="text-center p-5">Blog</h2>
        </div>
      <Row className="my-5">
        <Col xs={12} md={8}>
          <div>
              <h3>01: Difference between javascript and nodejs</h3>
              <p className="fs-5">Javascript is a wab programming language. That makes Website interactive.
                The function of javascript  is basically to maintain the client side. Javascript runs through the browser V8 engine. <br /> <br />
                On the other hand node js is the backend development of javascipt. And it worksfor any operating system. Its database is mongodb, which works on all types of operating systems. The freamework of node js is expressjs. 
              </p>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div>
              <img className="w-100 img-fluid" src={blog1} alt="" />
          </div>
        </Col>
      </Row>
      <Row  className="my-5">
        <Col xs={12} md={8}>
          <div>
              <h3>0.2: Differences between sql and nosql databases</h3>
              <p>SQL- Stractured Query Language. The data is arranged in the query based database form of a table, from which data in the form of query is available. Sql relational databse have managment system. Many relational databses have been created based on relation. like ORACLE, MySQL, POSTGRE. <br /><br />
              NoSQL: NoSql database is the key value pair. noSql database it is not necessary to create separate databse. A database can do all kinds of Work. All data is loaded through an error. And all user. its data is called collection. noSQL has its own query system. mongodb one of theme.              </p>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div>
              <img className="w-100 img-fluid" src={blog2} alt="" />
          </div>
        </Col>
      </Row>
      <Row  className="my-5">
        <Col xs={12} md={8}>
          <div>
              <h3>0.3 What is the purpose of jwt and how does it work</h3>
              <p>JWT- Json Web Token. It is mainly used for authentication. stored data throught token. Like JWT TOKEN , SESSION TOKEN . It is a lot like Json data. It has a cryptographic singned system. This keeps our api data safe. </p>
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
