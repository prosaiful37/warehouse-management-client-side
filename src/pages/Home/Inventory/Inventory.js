import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://nameless-river-31040.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container className="my-5">
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </Container>
  );
};

export default Inventory;
