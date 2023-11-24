import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Auth/AuthProvider';
import useAxioxPublic from '../../Hookes/useAxioxPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const {googleSingIn}=useContext(AuthContext)
   const AxiosPublic=useAxioxPublic()
   const navigate=useNavigate()
    const handelGoogleSingIn=()=>{
        googleSingIn()
        .then(res=>{
            console.log(res.user)

            const userInfo={
                email:res.user?.email,
                name:res.user?.displayName
            }

            AxiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.user)
                navigate('/')
            })
        })
    }
    return (
        <div className='p-4 mx-auto'>
            <div className="divider"></div>
            <div>
                <button onClick={handelGoogleSingIn} className='btn btn-outline btn-secondary'><FaGoogle className='text-2xl font-bold mr-4'></FaGoogle>Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;