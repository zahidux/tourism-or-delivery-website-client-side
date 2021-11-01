import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer_single">
                            <h1>Hotel Booking</h1>
                            <p>Booking.com is a Dutch online travel agency for lodging reservations & other travel products, and a subsidiary of Booking Holdings.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_single">
                            <h1>Enjoy Time</h1>
                            <ul>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#"> Blog & Tips</a></li>
                                <li><a href="#">Tour Guid</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_single">
                            <h1>Save Money</h1>
                            <ul>
                                <li><a href="#">Customer Services</a></li>
                                <li><a href="#">Best Option</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Baget Room</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copyright_area">
                    <p>Copyright @ 2021 Hotel Booking.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;