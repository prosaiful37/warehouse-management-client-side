import React from 'react';
import Banner from '../Banner/Banner';
import BrandCarsoul from '../BrandCarsoul/BrandCarsoul';
import FeaturesProduct from '../FeaturesProduct/FeaturesProduct';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturesProduct></FeaturesProduct>
            <Inventory></Inventory>
            <BrandCarsoul></BrandCarsoul>
        </div>
    );
};

export default Home;