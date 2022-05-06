import React from 'react';
import Banner from '../Banner/Banner';
import BrandCarsoul from '../BrandCarsoul/BrandCarsoul';
import FeaturesProduct from '../FeaturesProduct/FeaturesProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturesProduct></FeaturesProduct>
            <BrandCarsoul></BrandCarsoul>
        </div>
    );
};

export default Home;