import React from 'react';
import { Button } from 'react-bootstrap';
import './Items.css';
import {useNavigate} from 'react-router-dom';

const Items = ({item}) => {
    const {name, image, _id, price, description, quantity, supplierName} = item;
    const navigate = useNavigate();
    const navigateToItemDetails = () =>{
        navigate(`/item/${_id}`)
    }

    return (
        <div className='items border border-rouded p-3'>
            <img src={image} alt="" />
            <div className='text-start'>
            <h4>{name}</h4>
            <h5>Price: ${price}</h5>
            <h6>{description}</h6>
            <h6>Quantity:  {quantity} </h6>
            <h6>Supplier name:  {supplierName} </h6>
            </div>
            <Button onClick={navigateToItemDetails} className='mb-1 px-4' variant="danger">Stock Update</Button>
        </div>
    );
};

export default Items;