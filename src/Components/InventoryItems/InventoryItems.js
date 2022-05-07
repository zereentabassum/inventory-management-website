import React from 'react';
import Items from '../Items/Items';
import useItems from '../useItems';
import './InventoryItems.css';

const InventoryItems = () => {
    const allItems = useItems();
    const items = allItems.slice(0, 6);
    
    return (
        <div className='m-5 pt-4'>
            <h1 className='text-danger py-3 pt-5'>Inventory Items</h1>
        <div className='inventory-items'>

            {
                items.map(item=> <Items key={item._id} item={item}></Items>)
            }
            </div>    
             
        </div>
    );
};

export default InventoryItems;