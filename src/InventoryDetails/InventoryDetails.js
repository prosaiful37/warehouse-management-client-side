
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useInventoryDetails from "../Hooks/useInventoryDetails";

const InventoryDetails = () => {
  const { inventoryId } = useParams();

  // const [product, setProduct] = useState({});

  // useEffect(() => {
  //     const url = `http://localhost:5000/product/${inventoryId}`
  //     fetch(url)
  //     .then(res => res.json())
  //     .then(data => setProduct(data))
  // },[])

  const [product] = useInventoryDetails(inventoryId);

  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={12}>
          <Card className="w-50 mx-auto bg-light" style={{ width: "18rem" }}>
            <Card.Img className="w-25 mx-auto" variant="top" src={product.img} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <p>{product.description}</p>
              </Card.Text>
              <p>Price: ${product.price}</p>
              <p>Qunentity: {product.quentity}</p>
              <p>Supplier: {product.supplierName}</p>
              <Button variant="primary">Deliverd</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InventoryDetails;
