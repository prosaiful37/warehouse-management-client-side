import { Button } from "bootstrap";
import React from "react";
import { Container, Form } from "react-bootstrap";

const AddInventory = () => {



    // add hanele submit 
    const handleAddSubmit = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        const img = event.target.img.value;

        const inventory = {name, description, price, quantity, supplierName,img}

        // add data to server
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inventory),
        })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });



    }







  return (
    <Container className="w-50 mx-auto my-5">
      <div className="my-5">
        <h2>Please add Invetory </h2>
        <Form onSubmit={handleAddSubmit} className="shadow p-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" name="name" placeholder="Product Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control name="description" as="textarea" rows={3} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" name="price" placeholder="Price" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" name="quantity" placeholder="Quentity" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" name="supplierName" placeholder="Supplier" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" name="img" placeholder="Photo_Url" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control className="bg-info fs-5 " type="submit" value="ADD" />
          </Form.Group>

        </Form>

      </div>
    </Container>
  );
};

export default AddInventory;
