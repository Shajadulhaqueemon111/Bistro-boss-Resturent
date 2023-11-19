import React from 'react';
import fetaure from '../../assets/home/featured.jpg'
import './Fertaure.css';
import { Link } from 'react-router-dom';
const Featured = () => {
    return (
        <div className='mb-10'>
            <div className=' fetaured-item  bg-fixed'>
                <div className='w-4/12 mx-auto'>
                <h2 className='text-xl text-center  text-[#D99904]'>---From 11:00am to 10:00pm---</h2>
                <hr />
                <h2 className='text-xl font-bold text-white text-center'>FROM OUR MENU</h2>
                <hr />
                </div>
            
            <div className='md:flex justify-center bg-slate-500  items-center py-8 px-16 bg-opacity-60 text-white  gap-4'>
                <div className='p-8'>
                    <img src={fetaure} alt="" />
                </div>
                <div className='md:ml-10'>
                    <h2 className='text-xl font-bold'>March 20, 2023 <br />
                        WHERE CAN I GET SOME?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error  <br /> voluptate facere, deserunt dolores maiores quod nobis quas quasi. <br /> Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                       <Link to='/order'>
                       <button className="btn btn-outline btn-secondary border-0 border-b-4">Order Now</button>
                       </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;