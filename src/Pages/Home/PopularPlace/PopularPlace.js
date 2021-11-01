import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './PopularPlace.css';



const PopularPlace = () => {
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const star = <FontAwesomeIcon icon={faStar} />
    return (
        <div className="popular_area container">
            <div className="popular_place_head">
                <h1> Most Popular Hotel</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4">
                    <Card className="popular_card">
                        <Card.Img variant="top" src="https://i.ibb.co/ySj6GVF/Dhaka-Hotels.jpg" />
                        <Button className="btn_regular">See More</Button>
                        <Card.Body>
                            <Card.Title>{location}United State</Card.Title>
                            <Card.Text>
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card className="popular_card">
                        <Card.Img variant="top" src="https://i.ibb.co/dW4KYmr/image-url-https-static-onecms-io-wp-content-uploads-sites-28-2021-07-28-taj-palace-057-TOPHOTELSWB21.jpg" />
                        <Button className="btn_regular">See More</Button>
                        <Card.Body>
                            <Card.Title>{location} India </Card.Title>
                            <Card.Text>
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card className="popular_card">
                        <Card.Img variant="top" src="https://i.ibb.co/GQF9f9B/The-Favorite-Hotels-Of-The-Rich-And-Famous.jpg" />
                        <Button className="btn_regular">See More</Button>
                        <Card.Body>
                            <Card.Title>{location} Malaysia</Card.Title>
                            <Card.Text>
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row g-4 mt-1">
                <div className="col-lg-4">
                    <Card className="popular_card">
                        <Card.Img variant="top" src="https://i.ibb.co/GxYFh4p/hotel1.jpg" />
                        <Button className="btn_regular">See More</Button>
                        <Card.Body>
                            <Card.Title>{location} Columbia</Card.Title>
                            <Card.Text>
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card className="popular_card">
                        <Card.Img variant="top" src="https://i.ibb.co/vk5BPL2/photo-1445019980597-93fa8acb246c-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-MTN8f-Ghvd-GVsf-GVuf-DB8f-DB8f.jpg" />
                        <Button className="btn_regular">See More</Button>
                        <Card.Body>
                            <Card.Title>{location} Russia</Card.Title>
                            <Card.Text>
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card className="popular_card">
                        <Card.Img variant="top" src="https://i.ibb.co/DPXf0Xt/world-travel-top-20-leading-hotels-and-resorts-around-the-world-0-1948386789.jpg" />
                        <Button className="btn_regular">Read More</Button>
                        <Card.Body>
                            <Card.Title>{location} Singapure</Card.Title>
                            <Card.Text>
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PopularPlace;