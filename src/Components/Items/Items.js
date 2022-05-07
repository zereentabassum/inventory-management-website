import React from 'react';
import { Button } from 'react-bootstrap';
import './Items.css';

const Items = ({item}) => {
    
    return (
        <div className='items border border-rouded p-3'>
            <img src={item.image} alt="" />
            <div className='text-start'>
            <h4>{item.name}</h4>
            <h5>Price: ${item.price}</h5>
            <h6>{item.description}</h6>
            <h6>Quantity:  {item.quantity} </h6>
            <h6>Supplier name:  {item.supplierName} </h6>
            </div>
            <Button className='mb-1 px-4' variant="danger">Stock Update</Button>
        </div>
    );
};

export default Items;