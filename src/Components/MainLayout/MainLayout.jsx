import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const MainLayout = () => {
    const location=useLocation()

    console.log(location)
    const noHeaderFooter=location.pathname.includes('login') || location.pathname.includes('sing-up')
    return (
        <div>
            {
                noHeaderFooter || <Navbar></Navbar>
    
            }
            <Outlet></Outlet>
            {
                noHeaderFooter || <Footer></Footer>
            }
        </div>
    );
};

export default MainLayout;