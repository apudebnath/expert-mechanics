import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 border rounded py-5 m-5 w-50 text-center">
                    <h2>{service.name}</h2>
                    <h4>Price: {service.price}</h4>
                    <h5>Booking ID: {serviceId}</h5>
                </div>
            </div>
        </div>
    );
};

export default Booking;