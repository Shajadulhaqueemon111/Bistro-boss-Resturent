import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Auth/AuthProvider';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
const navigate=useNavigate()
const location=useLocation()
 const [disable,setDisable]=useState(true)
 const {userSingIn}=useContext(AuthContext)

 const from = location.state?.from?.pathname || "/";

 console.log('state in the location',location.state)
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value; 

    const newUser = {
      email,
      password,
    };
    console.log(newUser);

    userSingIn(email,password)
    .then(res=>{
      console.log(res.user)
      Swal.fire({
        title: "Sucess fully login",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from, { replace: true });
    })
    .catch(error=>{
      console.log(error)
    })
  };

  const handelValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
  
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6"></p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input type="text" onBlur={handelValidateCaptcha}  placeholder="Type the text above" name="captcha" className="input input-bordered" required />
              
            </div>
            <div className="form-control mt-6">
              <button disabled={false} type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
            New here? Create a New Account <Link className='text-red-500 font-bold' to='/sing-up'>Sing-up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
