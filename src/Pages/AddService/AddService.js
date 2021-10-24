import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert("Product added successfully.")
                reset();
            }
            console.log(res)
        })
        
    };

    return (
        <div className="product-service">
            <h2>Add Service</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input {...register("name", { required: true,})} placeholder="Product Name" />
                <textarea {...register("description")} placeholder="Describe product Feature"/>
                <input type="number" {...register("price")} placeholder="Product Price" />
                <input {...register("img")} placeholder="Product Image url"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;