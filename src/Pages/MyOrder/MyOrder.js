import React, { useEffect, useState } from 'react';
import './MyOrder.css';

const MyOrder = ({ order }) => {
    const { packageName, packagePrice, packageImg } = order;

    return (
        <div>
            <div className="my_order w-100">
                <div className="order_img">
                    <img src={packageImg} alt="" />
                </div>
                <div className="order_content">
                    <h4>{packageName}</h4>
                    <h5>Price: ${packagePrice}</h5>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;