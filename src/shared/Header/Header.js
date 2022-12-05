import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/website-image.jpg'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <img className='h-16' src={image} alt="" />
    <Link to='/' className="btn btn-ghost normal-case text-xl">LEARN ACADEMY</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/courses'>Courses</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/register'>Register</Link></li>
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;