import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/UserContext';

const LogIn = () => {
  const { userLogIn}= useContext(authContext)

  const handelLogIn = event =>{
    event.preventDefault()
    const form = event.target;
    
    const email = form.email.value;
    const password = form.password.value;
    userLogIn(email, password)
    .then((result)=>{
      const user = result.user;
      console.log(user)
    })
    .catch((error)=> console.error('error', error))
    form.reset()
    console.log( email, password)
  }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <div>
        <div className="divider">OR</div>
        </div>
        <button className="btn mb-3 btn-outline btn-primary">Google</button>
        <button className="btn btn-outline btn-primary">GitHub</button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Have a new account? <Link to='/register'> <span className='text-orange-500'>Register </span></Link></a>
          </label>
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default LogIn;