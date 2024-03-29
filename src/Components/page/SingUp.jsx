import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxioxPublic from '../../Hookes/useAxioxPublic';
import SocialLogin from '../SocialLogin/SocialLogin';

const SingUp = () => {

    const {userSingUp,updateUserProfile}=useContext(AuthContext)
    const navigate=useNavigate()

    const AxiosPublic=useAxioxPublic()
    const {
        register,
        handleSubmit,
       reset,
        formState: { errors },
      } = useForm()

      const onSubmit=data=> {
     userSingUp(data.email,data.password)

     .then(res=>{
                console.log(res.user)
                updateUserProfile(data.name,data.PhotoURL)
                .then(()=>{
                 const userInfo={
                  name: data.name,
                  email:data.email,
                  
                 }
                 AxiosPublic.post('/users',userInfo)
            .then((res) => {
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Register successfully',
                  showConfirmButton: false,
                  timer: 1500,
                });

                navigate('/');
              }
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    });
};
  
    return (
    <div>
        <Helmet>
            <title>Sing-Up</title>
           
        </Helmet>
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Sing-Up</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"  {...register("name",{ required: true })} name='name' placeholder="name" className="input input-bordered"  />
                {errors.name&& <span className='text-red-400'>Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text"  {...register("PhotoURL",{ required: true })} name='PhotoURL' placeholder="name" className="input input-bordered"  />
                {errors.PhotoURL&& <span className='text-red-400'>PhotoURL field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  {...register("email",{ required: true })} name='email' placeholder="email" className="input input-bordered" required />
                {errors.email&& <span className='text-red-400'>Email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  {...register("password",{ required: true,minLength:6,maxLength: 20,
                 pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })} name='password' placeholder="password" className="input input-bordered" required />
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sing-Up</button>
              </div>
              <p>
              Already registered? Go to log in <Link className='text-red-500 font-bold' to='/login'>Login</Link>
              </p>
            </form>
            <SocialLogin></SocialLogin>
          </div>
       
        </div>
      </div>
  
    </div>
      );
};

export default SingUp;