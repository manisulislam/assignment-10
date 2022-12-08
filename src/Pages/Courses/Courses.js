import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Details from './Details';
import Side from './Side';

const Courses = () => {
    const [programmes, setProgrammes] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/programming-languages')
        .then( res => res.json())
        .then(data => setProgrammes(data))
    },[])
    console.log(programmes)
    return (
        <div className='flex '>
            <div>
                {
                    programmes.map(programme => <p 
                    className='border rounded m-2 p-2'
                    key={programme.id}
                    programme={programme}
                    
                    >
                        <Link to={`/side/${programme.id}`}>{programme.title}</Link>
                    
                    </p>)
                }
            </div>
            <div className='grid grid-cols-2'>
            {
                    programmes.map(programme => <Details 
                    key={programme.id}
                    programme={programme}
                    ></Details> )
                }


            </div>
        </div>
    );
};

export default Courses;