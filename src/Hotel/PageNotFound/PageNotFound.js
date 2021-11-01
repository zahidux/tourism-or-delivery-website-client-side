import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="page_not_found_area">
            <Link to="/home"><Button className="btn_regular">Back To Home</Button></Link>
        </div>
    );
};

export default PageNotFound;