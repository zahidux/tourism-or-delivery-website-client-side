import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Order.css';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const Order = ({ catchPackage }) => {
    const { _id, name, img, price, description } = catchPackage;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/order', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                }
            });
    };

    const { user } = useAuth();
    return (
        <div className="order_area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="order_package_img">
                            <img className="w-100" src={img} alt="" />
                        </div>
                        <div className="order_package_details">
                            <div className="d-flex align-items-center">
                                <div className="order_package_content">
                                    <h1>{name}</h1>
                                    <h5>{description}</h5>
                                    <h3>Price : <span>${price}</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="personal_details">
                            <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                                <h1>Package info</h1>
                                <input defaultValue={name} {...register("packageName")} />
                                <input defaultValue={price} placeholder="$ Price" {...register("packagePrice")} />
                                <textarea defaultValue={description} placeholder="Description" {...register("packageDes")} />
                                <input defaultValue={img} {...register("packageImg")} />
                                <input defaultValue={_id} {...register("packageId")} />
                                <h4>Personal Info</h4>
                                <input defaultValue={user.displayName} {...register("userName")} />
                                <input defaultValue={user.email} {...register("userEmail", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                                <input placeholder="Address" {...register("address")} />
                                <input placeholder="City" {...register("city")} />
                                <input placeholder="Phone Number" {...register("phone")} />

                                <input className="btn_regular" type="submit" value="Prace An Order" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;