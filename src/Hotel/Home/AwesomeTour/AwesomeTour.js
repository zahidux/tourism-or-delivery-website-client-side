import React from 'react';
import { Button } from 'react-bootstrap';
import './AwesomeTour.css';

const AwesomeTour = () => {
    return (
        <div className="awesome_tour_area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="awesome_img">
                            <img className="w-100" src="https://i.ibb.co/Kx4YJn6/1491580776998.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="awesome_content">
                            <h1>Booking it and Enjoy <br /> Your Time</h1>
                            <h5>This year's best hotel in the world</h5>
                            <Button className="btn_regular">Explore More...</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwesomeTour;