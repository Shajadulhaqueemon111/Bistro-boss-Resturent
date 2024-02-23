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
import AllUsers from '../MainLayout/AllUsers';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AdmineRoute from '../AdmineRoute/AdmineRoute';
import AddItems from '../MainLayout/AddItems';
import ManageAllIteam from '../ManageItem/ManageAllIteam';
import UpdateItem from '../ManageItem/UpdateItem';
import Payment from '../Payment/Payment';
import PaymentHistory from '../PaymentHistory/PaymentHistory';
import ErrorPage from '../../ErrorPage/ErrorPage';
const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
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
      element:<PrivateRoute><Dasboard></Dasboard></PrivateRoute>,
      children: [
        {
          path: 'cart',  
          element: <Cart></Cart>
        },
        {
          path: 'payment',  
          element:<Payment></Payment>
        },
        {
          path: 'paymentHistory',  
          element:<PaymentHistory></PaymentHistory>
        },
        //admine section and route
        {
          path: 'users',  
          element:<AdmineRoute><AllUsers></AllUsers></AdmineRoute>
        },

        
        {
          path: 'addItems',  
          element:<AdmineRoute><AddItems></AddItems></AdmineRoute>
        },
        {
          path: 'manageItem',  
          element:<AdmineRoute><ManageAllIteam></ManageAllIteam></AdmineRoute>
        },
        {
          path: 'updateItem/:id',  
          element:<AdmineRoute><UpdateItem></UpdateItem></AdmineRoute>,
          loader:({params})=>fetch(`https://mistro-boss-server.vercel.app/menu/${params.id}`)

        },
      ]
    }
    
  ]);

export default router;