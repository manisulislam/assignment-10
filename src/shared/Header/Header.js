import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import image from '../../assets/website-image.jpg'
import { authContext } from '../../Context/UserContext';
import { Tooltip, ReactTooltip } from 'react-tooltip'
import './toggle.css'

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
const Header = () => {

  const { user } = useContext(authContext)


  console.log(user)

  const menuitems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/courses'>Courses</Link></li>
    <li><Link to='/login'>Login</Link></li>
    <li><Link to='/register'>Register</Link></li>
    <div className="form-control mt-1">
      <label className="label ">
        <button >
          <input type="checkbox" className="toggle" />

        </button>
      </label>
    </div>

  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuitems}
          </ul>
        </div>
        <img className='h-20' src={image} alt="" />
        <Link className="btn btn-ghost normal-case text-xl">LEARN ACADEMY</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuitems}
        </ul>
        {
          user?.uid? <div>
            
            <button><CgProfile></CgProfile></button>
           
            
            
          </div> : <Link to='/login'>login</Link>

        }
      </div>


    </div>

    /*
    
    
    
    */

  );


};


export default Header;