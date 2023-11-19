import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import {TiShoppingCart } from 'react-icons/ti';
import useCart from '../../useQuery/useCart';
const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)
const [cart]=useCart()
  const handelLogOut = () => {
    logOut()

      .then(error => {
        console.log(error)
      })
  }
  const navoptions = <>
    <li><NavLink to='/'>HOME</NavLink></li>
    <li><NavLink to='/contact'>CONTACTUS</NavLink></li>
    <li><NavLink to='/dasboard'>DASHBOARD</NavLink></li>
    <li><NavLink to='/menu'>Our Menu</NavLink></li>
    <li><NavLink to='/order/Salad'>Our Order</NavLink></li>

    <li>
      <Link to='/dashboard/cart'>
        <button className="btn">
        <TiShoppingCart className='mr-2 text-2xl font-bold'></TiShoppingCart>
          <div className="badge badge-secondary">+{cart.length}</div>
        </button>

      </Link>

    </li>

    {user ? (
      <>
        {/* <span>{user?.displayName}</span> */}
        <button onClick={handelLogOut} className="btn btn-active btn-ghost">LogOut</button>
      </>
    ) : (
      <li><NavLink to='/login'>Login</NavLink></li>
    )}
  </>
  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-xl  bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navoptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS  </a><br />
          <p className='text-xl'><span className='text-[#d946ef]'>RESTURENT</span></p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            {navoptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;