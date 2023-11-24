import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutFrom from './CheckOutFrom';

//Todo: add publishable key
const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
           <div className='text-center'>
            <h2>User</h2>
            <hr />
            <h2 className='text-2xl font-bold'>Payment</h2>
            </div> 
            <div>
                 <Elements stripe={stripePromise}>
                <CheckOutFrom></CheckOutFrom>
                 </Elements>
            </div>
        </div>
    );
};

export default Payment;