import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <Container className='my-5'>
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(product => 
                        <Product 
                            product={product}>
                        </Product>   
                    )
                }
            </Row>
        </Container>
    );
};

export default Inventory;