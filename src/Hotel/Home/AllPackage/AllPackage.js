import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SinglePackage from '../SinglePackage/SinglePackage';
import './AllPackage.css';

const AllPackage = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('./place.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);


    return (
        <div id="all_package" className="all_package_area">
            <div className="container">
                <div className="all_package_head">
                    <h1>Best Hotel Booking <br />  Packages</h1>
                </div>

                <div className="row g-5">
                    {
                        packages.map(singlPpackage => <SinglePackage
                            package={singlPpackage}
                        ></SinglePackage>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllPackage;