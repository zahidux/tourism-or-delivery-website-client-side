import React from 'react';
import AllPackage from '../AllPackage/AllPackage';
import AwesomeTour from '../AwesomeTour/AwesomeTour';
import Banner from '../Banner/Banner';
import PopularPlace from '../PopularPlace/PopularPlace';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllPackage></AllPackage>
            <PopularPlace></PopularPlace>
            <AwesomeTour></AwesomeTour>
        </div>
    );
};

export default Home;