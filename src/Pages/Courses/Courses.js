import React, { useEffect, useState } from 'react';
import Details from './Details';
import Side from './Side';

const Courses = () => {
    const [programmes, setProgrammes] =useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/programming-languages')
        .then( res => res.json())
        .then(data => setProgrammes(data))
    },[])
    console.log(programmes)
    return (
        <div>
            <div>
                {
                    programmes.map(programme => <Side 
                    key={programme.id}
                    programme={programme}
                    
                    ></Side>)
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