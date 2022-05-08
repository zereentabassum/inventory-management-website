import React from 'react';
import { Accordion } from 'react-bootstrap';
import './ExtraSectionTwo.css';

const ExtraSectionTwo = () => {
    return (
        <div className='second-extra '>
        <div className='faq'>
            <h1 className='text-light pt-5 display-4'>Frequently Asked Questions about our Inventory Items</h1>
        </div>

        <div className='accordion-div container py-5'>
            <Accordion className='container'>
     <Accordion.Item eventKey="0">
        <Accordion.Header>How fast can a Lexus car go?</Accordion.Header>
        <Accordion.Body>
        The Lexus  300 has a 143mph top speed, a remarkable feat. This top speed statistic is guaranteed to excite driving enthusiasts.
        </Accordion.Body>
     </Accordion.Item>
    <Accordion.Item eventKey="1">
        <Accordion.Header>Is Nissan Qasqai worth buying?</Accordion.Header>
        <Accordion.Body>
        Nissan has sold more than 2.3 million Qashqais and it's easy to see why. It's good to drive, available with decent engines and as long as you avoid entry-level models, equipment levels are generous.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
        <Accordion.Header>What's the Toyota version of Lexus LS?</Accordion.Header>
        <Accordion.Body>
        The Toyota Land Cruiser and the Lexus LX 570 SUV share their parent company, Toyota in common. Both represent the top of the line SUV for their respective brands.These two SUVs share many features in common.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
        <Accordion.Header>Is Porch 928 rare?</Accordion.Header>
        <Accordion.Body>
        While the numbers vary from source to source, most agree that for the 3 years the 928 GTS came into the US only 406 of them made their way to our shores.
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
    </div>
  
        </div>
    );
};

export default ExtraSectionTwo;