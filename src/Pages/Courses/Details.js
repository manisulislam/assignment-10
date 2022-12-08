import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({ programme }) => {

    const { id, title, image, details } = programme;
    return (
        <div className="card bg-base-100 m-2">
            <figure><img className='h-32' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.length > 200? details.slice(0,200) + '...': details}</p>
                <div className="card-actions justify-end">
                    <Link to={`/courses/${programme.id}`}>
                    <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;