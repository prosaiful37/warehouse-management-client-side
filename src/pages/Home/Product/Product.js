import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const {_id, name, img, description, price, quantity, supplierName } = product;
  const navigete = useNavigate();





  const navigateToInventory = id => {
    navigete(`/product/${id}`)
  }


  return (
    <Col>
      <Card className="bg-light shadow border-4">
        <Card.Img className="w-50 mx-auto" variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            {" "}
            <h3>{name}</h3>{" "}
          </Card.Title>
          <Card.Text>
            <h5>
              Price: <span className="text-danger">${price}.00</span>
            </h5>
            <p>{description}</p>
            <h6>Quentity: {quantity}</h6>
            <h6>Supplier : {supplierName}</h6>
          </Card.Text>
          <Button onClick={() => navigateToInventory(_id)}  className="d-block w-100" variant="outline-danger" size="lg">
            UPDATE
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
