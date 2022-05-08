import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
    console.log(data);
    const url = `https://obscure-thicket-87348.herokuapp.com/item`
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(result =>{
        console.log(result);
    } )
    }
    return (
        <div className='mt-4'>
            <h1>Add Items</h1>


            <div className=''>
     <form className='w-50 m-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
        <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
        <textarea className='mb-2' placeholder='Description' {...register("description")} />
        <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
        <input className='mb-2' placeholder='Photo URL' type="text" {...register("image")} />
        <input type="submit" />
     </form>
        </div>
        </div>
    );
};

export default AddItem;