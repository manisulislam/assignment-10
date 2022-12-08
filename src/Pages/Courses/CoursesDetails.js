import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const contentDetails = useLoaderData()
    const {id,title, image, details}= contentDetails
    return (
        <div>
            <div className='flex'>
            <h1>Every course details is here. </h1>
            <button className="btn btn-active btn-primary">Download pdf</button>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
    <div className="card-actions justify-end">
    
      <Link to={`/checkout/${id}`}><button className="btn btn-primary">Get Premimum Access</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoursesDetails;