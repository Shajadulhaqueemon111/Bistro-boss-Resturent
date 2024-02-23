import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
           <img src="https://i.ibb.co/52MSTv5/11-3.png" alt="" />
           <Link to='/'>
           <button className='btn btn-secondary mx-auto w-full'>Please Back To Home Page</button>
           </Link>
        </div>
    );
};

export default ErrorPage;