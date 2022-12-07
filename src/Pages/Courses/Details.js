import React from 'react';

const Details = ({ programme }) => {

    const { id, title, image, details } = programme;
    return (
        <div className="card bg-base-100 m-3 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.length > 200? details.slice(0,200) + '...': details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;