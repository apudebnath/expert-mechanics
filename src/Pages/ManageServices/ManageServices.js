import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    
    const handleDelete = id => {
        fetch(`http://localhost:5000/services/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
                alert('Product Deleted Successfully.')
            }

        })
    }
    return (
        <div className="container">
            <h2>Manage Services</h2>
            <div className="row">
            {
                services.map(service => <div key={service._id} className="col-md-4 py-3">
                    <div className="service">
                        <h2>{service.name}</h2>
                        <h5>Price: ${service.price}</h5>
                        <button onClick={() => handleDelete(service._id)}>Delete</button>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default ManageServices;