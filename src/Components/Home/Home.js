import React from 'react';
import ExtraSectionOne from '../ExtraSectionOne/ExtraSectionOne';
import ExtraSectionTwo from '../ExtraSectionTwo/ExtraSectionTwo';
// import Footer from '../Footer/Footer';
import HeadingSection from '../HeadingSection/HeadingSection';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <HeadingSection></HeadingSection>
            <InventoryItems></InventoryItems>
            <ExtraSectionOne></ExtraSectionOne>  
            <ExtraSectionTwo></ExtraSectionTwo>         
        </div>
    );
};

export default Home;