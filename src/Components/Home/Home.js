import React from 'react';
import Footer from '../Footer/Footer';
import HeadingSection from '../HeadingSection/HeadingSection';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <HeadingSection></HeadingSection>
            <InventoryItems></InventoryItems>
            <Footer></Footer>
        </div>
    );
};

export default Home;