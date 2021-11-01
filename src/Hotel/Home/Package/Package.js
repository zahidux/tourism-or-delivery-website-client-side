import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import './Package.css';


const Package = ({ data }) => {
    console.log(data)
    const flag = <FontAwesomeIcon icon={faFlag} />
    return (
        <div className="package_area row g-5">
            <div className="col-lg-4">
                <Card className="package_card">
                    <div className="card_img">
                        <Card.Img variant="top" src="https://i.ibb.co/TTsXrpH/popular-2.jpg" />
                    </div>
                    <Card.Body>
                        <Card.Title>Glacier Walk Combo</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button className="btn_regular">{flag} Book Now</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Package;