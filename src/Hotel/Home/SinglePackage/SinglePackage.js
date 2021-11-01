import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import './SinglePackage.css';

const SinglePackage = (props) => {
    console.log(props.package)
    const flag = <FontAwesomeIcon icon={faFlag} />

    const { name, img, description } = props.package;
    return (
        <div className="col-lg-4">
            <Card className="package_card">
                <div className="card_img">
                    <Card.Img variant="top" src={img} />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button className="btn_regular">{flag} Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SinglePackage;