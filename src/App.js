import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    
  } from "react-router-dom";

//IMPORT ALL COMPONENTS
import Username from './components/Username';
import Reset from './components/Reset';
import Register from './components/Register';
import Profile from './components/Profile';
import Password from './components/Password';
import NotFoundPage from './components/NotFoundPage';
import Recovery from './components/Recovery';

//ROOT ROUTES
const router=createBrowserRouter([
    {
        path:'/',
        element:<Username />
    },
    {
        path:'/register',
        element:<Register />
    },
    {
        path:'/password',
        element:<Password />
    },
    {
        path:'/profile',
        element:<Profile />
    },
    {
        path:'/recovery',
        element:<Recovery />
    },
    {
        path:'/reset',
        element:<Reset />
    },
    {
        path:'*',
        element:<NotFoundPage />
    },
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}>

        </RouterProvider>
    </main>
  )
}
