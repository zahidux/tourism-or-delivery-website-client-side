import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import './SinglePackage.css';
import { Link } from 'react-router-dom';

const SinglePackage = (props) => {
    const flag = <FontAwesomeIcon icon={faFlag} />

    const { _id, name, img, description } = props.package;

    const url = `/order/${_id}`
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
                    <Link to={url}><Button className="btn_regular">{flag} Book Now</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SinglePackage;