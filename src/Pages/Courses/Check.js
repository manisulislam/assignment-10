import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Check = () => {
    const checkOut = useLoaderData()
    const {title}= checkOut
    console.log(checkOut)

    return (
        <div>
            
            <p className='text-4xl'>This is course name is: {title}</p>
        </div>
    );
};

export default Check;