import React from 'react';
import { FaSearch } from "react-icons/fa";
import { TiBookmark, TiCalendar, TiHome, TiShoppingCart, TiUserAdd, TiUserAddOutline } from 'react-icons/ti';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../useQuery/useCart';

const Dasboard = () => {

    const [cart]=useCart()
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu p-4'>
                    <li><NavLink to='/dashboard/userHome'>
                        <TiHome className='text-2xl font-bold'></TiHome>
                        User Home</NavLink>

                    </li>
                    <li><NavLink to='/dashboard/reservation'>
                        <TiCalendar className='text-2xl font-bold'></TiCalendar>
                        Reservation</NavLink>

                    </li>
                    <li><NavLink to='/dashboard/review'>
                        <TiUserAdd className='text-2xl font-bold'></TiUserAdd>
                        Add Review</NavLink>

                    </li>
                    <li><NavLink to='/dashboard/booking'>
                        <TiBookmark className='text-2xl  font-bold'></TiBookmark>
                        My Booking</NavLink>

                    </li>
                    <li><NavLink to='/dashboard/cart'>
                        <TiShoppingCart className='text-2xl  font-bold'></TiShoppingCart>
                        My Cart ( {cart.length})</NavLink>

                    </li>
                    <div className="divider"></div>
                    <li><NavLink to='/'>
                        <TiHome className='text-2xl font-bold'></TiHome>
                         Home</NavLink>

                    </li>
                    <li><NavLink to='/order/salad'>
                      <FaSearch className='text-2xl font-bold'></FaSearch>
                       
                         Menu</NavLink>

                    </li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dasboard;