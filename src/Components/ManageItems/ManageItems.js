import React from 'react';
import useItems from '../useItems';
import './ManageItems.css';

const ManageItems = () => {
    const [items, setItems] = useItems();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://obscure-thicket-87348.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            })
        }
    }      

    return (
        <div className='container py-4'>
            <h1>Manage Inventory</h1>
            {
                items.map(item=><div key={item._id}>
                <div className='d-flex container'>
                    <div>
                   <img className='manage-image' src={item.image} alt="" />
                    </div>
                    <div className='text-start'>
                    <h6><span className='text-success'>Name: </span> {item.name}</h6>
                    <h6><span className='text-success'>Price: </span> {item.price}</h6>
                    <h6><span className='text-success'>Description: </span> {item.description}</h6>
                    </div>
                    <div className='text-end'>
                        <button onClick={()=>handleDelete(item._id)} className='border border-none bg-danger text-light px-2 py-1'>Delete</button>
                    </div>
                </div>
                <hr />

                </div>)
            }
        </div>
    );
};

export default ManageItems;