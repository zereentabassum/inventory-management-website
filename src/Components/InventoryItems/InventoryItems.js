import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Items from '../Items/Items';
import useItems from '../useItems';
import './InventoryItems.css';
import {AiTwotoneCar} from 'react-icons/ai';

const InventoryItems = () => {
    const [allItems, setAllItems] = useItems();
    const items = allItems.slice(0, 6);

    const navigate = useNavigate();
    const inventoryManage = () =>{
        navigate('/manageItems');
    }
    
    return (
        <div className='m-5 pt-4'>
            <h1 className='text-danger py-3 pt-5'>Inventory Items</h1>
        <div className='inventory-items'>

            {
                items.map(item=> <Items key={item._id} item={item}></Items>)
            }
            </div>   

            <div>
               <Button onClick={inventoryManage}  className='text-decoration-none m-5 fs-5 bg-info text-dark' variant='link'>Manage Inventories  <AiTwotoneCar className='text-danger'/></Button>
            </div> 
        </div>
    );
};

export default InventoryItems;