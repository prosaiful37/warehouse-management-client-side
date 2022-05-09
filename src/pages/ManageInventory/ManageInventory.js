import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useInentory from "../../Hooks/useInventory";

const ManageInventory = () => {
    const navigate = useNavigate()
  const [products, setProducts] = useInentory();

  // data delete handle
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaning = products.filter((product) => product._id !== id);
          setProducts(remaning);
        });
    }
  };



//   navigate to add invetory
  const navigateToAddInventory = () => {
    navigate('/addInventory')
  }

  return (
    <Container>
        <h2 className="text-center my-5"> Our All Inventory</h2>
      <div>
        {products.map((product) => (
          <Table responsive="sm" striped bordered hover variant="light">
            <thead>
              <tr>
                <th>#</th>
                <th>Product-Id</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quentity</th>
                <th>Supplier Name</th>
                <th>image</th>
                <th>Inventory Delete</th>
                <th>Inventory Add</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>$ {product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.supplierName}</td>
                <td>
                  <img
                    style={{ width: "100px", height: "80px" }}
                    src={product.img}
                    alt=""
                  />
                </td>
                <td>
                  <Button
                    onClick={() => handleDelete(product._id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button onClick={() => navigateToAddInventory()} variant="primary">Add</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        ))}
        
      </div>
    </Container>
  );
};

export default ManageInventory;
