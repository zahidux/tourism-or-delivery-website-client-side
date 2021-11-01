import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer_single">
                            <h1>About Us</h1>
                            <p>Find Hotel Booking Us. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results and Answers</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_single">
                            <h1>Save time</h1>
                            <ul>
                                <li><a href="#">Customer service</a></li>
                                <li><a href="#">Emargency help</a></li>
                                <li><a href="#">Get everthing soon</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_single">
                            <h1>Save Monoy</h1>
                            <ul>
                                <li><a href="#">Always Support</a></li>
                                <li><a href="#">Privacy & Policy</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Friendy baget</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copyright_area">
                    <p>Copyright @ 2021 Hotel Book.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;