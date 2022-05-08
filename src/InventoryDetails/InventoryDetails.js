import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import useInventoryDetails from "../Hooks/useInventoryDetails";

const InventoryDetails = () => {
  const { inventoryId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/product/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [inventoryId]);

  //handle quentity
  const inventoryQuentityDecrement = () => {
    const oldNumbers = [product.quantity]
        let newNumbers = parseInt(oldNumbers);
    
        newNumbers--;
        console.log(newNumbers);
      

         //send data to server
        const url = `http://localhost:5000/product/${inventoryId}`;
        fetch(url, {
            method: "PUT",
            headers: {
            contentType: "application/json"
            },
            body: JSON.stringify(newNumbers),
        })
            .then((res) => res.json())
            .then((data) => {
            console.log("success, data");
            alert("stock added successfullly");
            });

      
      

 };

  //

//   const handleInventoryQuentityIncrement = (event) => {
//     event.preventDefault();
    
//     const name = event.target.name.value;
//     const oldNumbers = [product.quantity]
//     let newNumbers = parseInt(oldNumbers , name);

//     newNumbers++;
//     console.log(newNumbers);
    

    // const updateProduct = {newNumbers};

    //   send data to server
//   const url = `http://localhost:5000/product/${inventoryId}`;
//   fetch(url, {
//     method: "PUT",
//     headers: {
//       contentType: "application/json"
//     },
//     body: JSON.stringify(updateProduct),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("success, data");
//       alert("stock added successfullly");
//     });






//   };

  

  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={12}>
          <Card className="w-50 mx-auto bg-light" style={{ width: "18rem" }}>
            <Card.Img
              className="w-25 mx-auto"
              variant="top"
              src={product.img}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <p>{product.description}</p>
              </Card.Text>
              <p>Price: ${product.price}</p>
              <p>Qunentity: {product.quantity}</p>
              <p>Supplier: {product.supplierName}</p>
              <Button
                onClick={() => inventoryQuentityDecrement()}
                variant="primary"
              >
                Delivered
              </Button>
              <div className="mt-3">

                <form   action="">
                  <input type="number" name='name' />
                  <input type="submit" value="Restock" />
                </form>

              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InventoryDetails;
