import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../components/Home/Home';
import Booking from '../components/Booking/Booking';
import Hotel from '../components/Hotel/Hotel';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import PrivateRoutes from './PrivateRoutes';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/registration',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/category/:id',
        element: <Booking></Booking>,
        loader: ({ params }) => fetch(`https://travel-guru-server-99vcxvsoc-punam-bhuyans-projects.vercel.app/categories/${params.id}`)
      },
      {
        path: '/hotelInfo/:id',
        element: <PrivateRoutes><Hotel></Hotel></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://travel-guru-server-99vcxvsoc-punam-bhuyans-projects.vercel.app/hotel/${params.id}`)
      },
    ]
  }
])