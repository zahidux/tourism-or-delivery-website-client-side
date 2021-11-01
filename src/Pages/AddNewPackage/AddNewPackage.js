import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewPackage.css';

const AddNewPackage = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://quiet-hollows-33695.herokuapp.com/all-booking', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Success to added new package')
                    reset();
                }
            })
        console.log(data)
    };
    return (
        <div className="add_package_area">
            <div className="container-fluid">
                <h1 className="text-center mt-4">Add New Package</h1>
                <div className="personal_details row">
                    <form className="col-lg-6" onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Package Name" {...register("name")} />
                        <input placeholder="$ Price" {...register("price")} />
                        <textarea placeholder="Description" {...register("description")} />
                        <input placeholder="Image URL" {...register("img")} />

                        <input className="btn_regular" type="submit" value="Add Package" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewPackage;