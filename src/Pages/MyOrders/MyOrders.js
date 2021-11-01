import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const email = user.email;

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    // find data by email
    useEffect(() => {
        if (users.length) {
            const orderDetails = users.filter(user => user.userEmail == email);
            setOrders(orderDetails)
        }
    }, [users])

    return (
        <div>
            <div className="container mb-5">
                <h1 className="text-center my-5">My Orders</h1>
                <div className="row">
                    <div className="col-lg-8">
                        {
                            orders.map(order => <MyOrder
                                key={order._id}
                                order={order}
                            ></MyOrder>)
                        }
                    </div>
                    <div className="col-lg-4">
                        <div className="my_order_area">
                            <h1>My order :{orders.length}</h1>
                            <Link to="/manage-order"><Button className="btn_regular mt-3">Manage All Orders</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;