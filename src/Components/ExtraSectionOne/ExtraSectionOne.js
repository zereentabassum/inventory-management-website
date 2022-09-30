import React from 'react';
import './ExtraSectionOne.css';
import {FaFacebook} from 'react-icons/fa';
import {ImTwitter} from 'react-icons/im';
import { Button, Form, InputGroup } from 'react-bootstrap';

const ExtraSectionOne = () => {
    return (
        <div className='extra text-light pb-5'>
            <h1 className='pb-2'>Stay in touch with us</h1>
            <div className=' extra-pic mb-4 mt-5'>
                <FaFacebook size={60} className='text-primary' cursor='pointer'/>
              <ImTwitter size={60} className='text-info' cursor='pointer'/>
            </div>
            
      <InputGroup className=" w-50 mx-auto my-5">
        <Form.Control
          placeholder="Your Email Address"
          aria-label="Recipient's email"
          aria-describedby="basic-addon2"
        />
        <Button variant="danger " id="button-addon2 ">
          Subscribe
        </Button>
      </InputGroup>
        </div>
    );
};

export default ExtraSectionOne;