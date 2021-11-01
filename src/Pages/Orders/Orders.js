import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Order from '../Order/Order';

const Orders = () => {
    const { id } = useParams();
    const [packages, setPackages] = useState([]);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://quiet-hollows-33695.herokuapp.com/all-booking')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    useEffect(() => {
        if (packages.length) {
            const addedOrder = [];
            const singleOrder = packages.find(singlePackage => singlePackage._id == id);
            addedOrder.push(singleOrder);
            setOrders(addedOrder)
        }
    }, [packages])

    return (
        <div>
            {
                orders.map(catchPackage => <Order
                    key={catchPackage._id}
                    catchPackage={catchPackage}
                ></Order>)
            }
        </div>
    );
};

export default Orders;