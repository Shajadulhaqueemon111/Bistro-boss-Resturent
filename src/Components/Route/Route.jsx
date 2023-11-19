import React from 'react';
import MainLayout from '../MainLayout/MainLayout';
import {

    createBrowserRouter,
  } from "react-router-dom";
import Home from '../Home/Home';
import Menue from '../Menue/Menues/Menue';
import Ordered from '../Orderd/Ordered';
import Login from '../page/Login';
import SingUp from '../page/SingUp';
import Dasboard from '../MainLayout/Dasboard';
import Cart from '../pages/Cart/Cart';
const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
           path:'/',
           element:<Home></Home> 
        },
        {
           path:'/menu',
           element:<Menue></Menue>
        },
        {
           path:'/login',
           element:<Login></Login>
        },
        {
           path:'/sing-up',
           element:<SingUp></SingUp>
        },
        {
           path:'/order/:category',
           element:<Ordered></Ordered>
        },
        
      ]
    },
    {
      path: '/dashboard',
      element:<Dasboard></Dasboard>,
      children: [
        {
          path: 'cart',  // Change from '/cart' to 'cart'
          element: <Cart></Cart>
        }
      ]
    }
    
  ]);

export default router;