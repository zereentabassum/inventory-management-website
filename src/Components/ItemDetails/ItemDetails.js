import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ItemDetails.css';

const ItemDetails = () => {
    const {_id} = useParams();
   const [item, setItem] = useState({});
   const [minus, setMinus ] = useState(0);
   useEffect(()=>{
       const url = `https://obscure-thicket-87348.herokuapp.com/item/${_id}`;

       fetch(url)
       .then(res=> res.json())
       .then(data=> setItem(data))
   }, [])

   const minusOne = () =>{
       
   }
   
  
    return (
        <div className='text-center container mt-4'>
            <h1>Inventory Item Details</h1>
            <div className='car-img'>
                <img className='img-fluid' src={item.image} alt="" />
            </div>
            <div className='text-start container'>
            <h2><span className='text-success'>Name:</span> {item.name}</h2>
            <h3><span className='text-success'>Price:</span> ${item.price}</h3>
            <h3><span className='text-success'>Description:</span>  {item.description}</h3>
            <h3><span className='text-success'>Mileage:</span>  {item.mileage} kmpl</h3>
            <h3><span className='text-success'>Supplier name: </span>  {item.supplierName}</h3>
    
            </div>
            <div className='container'>
            <h3 className='text-primary text-start'><span>Quantity: </span>     {item.quantity}</h3>
            <Button onClick={minusOne} className='mb-1 px-4' variant="danger">Delivered</Button>
        
            </div>
           

        </div>
    );
};

export default ItemDetails;