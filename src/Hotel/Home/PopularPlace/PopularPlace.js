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
                <h1> Most Popular Hotel <br /> In The World</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4">
                    <Card className="popular_card">
                        <Card.Img variant="top" src="https://i.ibb.co/9HGhmhz/The-Favorite-Hotels-Of-The-Rich-And-Famous.jpg" />
                        <Button className="btn_regular">See More</Button>
                        <Card.Body>
                            <Card.Title>{location} United State</Card.Title>
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
                        <Button className="btn_regular">See More</Button>
                        <Card.Body>
                            <Card.Title>{location} Singapure </Card.Title>
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
                        <Card.Img variant="top" src="https://i.ibb.co/5LYcnkm/5c1d4f98b3c21d4965261722.jpg" />
                        <Button className="btn_regular">See More</Button>
                        <Card.Body>
                            <Card.Title>{location} Dubai</Card.Title>
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
            <div className="row g-5 mt-2">
                <div className="col-lg-4">
                    <Card className="popular_card">
                        <Card.Img variant="top" src="https://i.ibb.co/nzXN33p/695890a580c8e4cf64784af9b3d51df9.jpg" />
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
                        <Card.Img variant="top" src="https://i.ibb.co/PmGCHDN/image-url-https-static-onecms-io-wp-content-uploads-sites-28-2021-07-28-taj-palace-057-TOPHOTELSWB21.jpg" />
                        <Button className="btn_regular">See More</Button>
                        <Card.Body>
                            <Card.Title>{location} Thailan</Card.Title>
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
                        <Card.Img variant="top" src="https://i.ibb.co/h7QCqJ9/hotel1.jpg" /><Button className="btn_regular">See More</Button>
                        <Card.Body>
                            <Card.Title>{location} Indonesia</Card.Title>
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