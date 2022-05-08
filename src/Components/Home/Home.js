import React from 'react';
import ExtraSectionOne from '../ExtraSectionOne/ExtraSectionOne';
// import Footer from '../Footer/Footer';
import HeadingSection from '../HeadingSection/HeadingSection';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <HeadingSection></HeadingSection>
            <InventoryItems></InventoryItems>
            <ExtraSectionOne></ExtraSectionOne>           
        </div>
    );
};

export default Home;