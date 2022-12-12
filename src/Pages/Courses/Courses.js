import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Details from './Details';
import Side from './Side';

const Courses = () => {
    const [programmes, setProgrammes] =useState([])
    useEffect(()=>{
        fetch('https://learning-platform-server-side-blue.vercel.app/programming-languages')
        .then( res => res.json())
        .then(data => setProgrammes(data))
    },[])
    console.log(programmes)
    return (
        
        <div >
            <div className='flex align-center justify-center my-4'>
            <h1 className='mt-2 mr-4
            '>All course details is here. </h1>
            <button className="btn btn-active btn-primary">Download pdf</button>
            </div>
            <div className='flex'>
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
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                    programmes.map(programme => <Details 
                    key={programme.id}
                    programme={programme}
                    ></Details> )
                }


            </div>

            </div>
            
            
        </div>
    );
};

export default Courses;