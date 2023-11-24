import React from 'react';
import { FaList, FaSearch, FaUsers, FaUtensils } from "react-icons/fa";
import { TiBookmark, TiCalendar, TiContacts, TiHome, TiShoppingCart, TiUserAdd, TiUserAddOutline } from 'react-icons/ti';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../useQuery/useCart';
import useAdmine from '../adminw/useAdmine';


const Dasboard = () => {

    const [cart] = useCart()
    //  const isAdmin=true;
    const [isAdmin] = useAdmine()
    console.log(isAdmin)
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu p-4'>

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/userHome'>
                                <TiHome className='text-2xl font-bold'></TiHome>
                                Admine Home</NavLink>

                            </li>
                            <li><NavLink to='/dashboard/addItems'>
                                <FaUtensils className='text-2xl font-bold'></FaUtensils>
                                {/* <TiCalendar ></TiCalendar> */}
                                AddItems</NavLink>

                            </li>
                            <li><NavLink to='/dashboard/manageItem'>
                                <FaList className='text-2xl font-bold'></FaList>

                                Manage Item</NavLink>

                            </li>
                            <li><NavLink to='/dashboard/manageBooking'>
                                <TiBookmark className='text-2xl  font-bold'></TiBookmark>
                                Manage Bookings</NavLink>

                            </li>
                            <li><NavLink to='/dashboard/users'>

                                <FaUsers className='text-2xl  font-bold'></FaUsers>
                                All User</NavLink>

                            </li>

                        </>
                            : <>
                                <li><NavLink to='/dashboard/userHome'>
                                    <TiHome className='text-2xl font-bold'></TiHome>
                                    User Home</NavLink>

                                </li>

                                <li><NavLink to='/dashboard/cart'>
                                    <TiShoppingCart className='text-2xl  font-bold'></TiShoppingCart>
                                    My Cart ( {cart.length})</NavLink>

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

                            </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to='/'>
                        <TiHome className='text-2xl font-bold'></TiHome>
                        Home</NavLink>

                    </li>
                    <li><NavLink to='/order/salad'>
                        <FaSearch className='text-2xl font-bold'></FaSearch>

                        Menu</NavLink>

                    </li>
                    <li><NavLink to='/order/contact'>
                        <TiContacts className='text-2xl font-bold'></TiContacts>

                        Contact</NavLink>

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