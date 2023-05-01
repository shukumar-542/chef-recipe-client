import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import Blog from '../Pages/Blog/Blog';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Login/Register/Register';

const route = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children :[
            {
                path :'/',
                element : <Home></Home>
            },
            {
                path :'blog',
                element : <Blog></Blog>
            },
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register>
            }
        ]

    }
])

export default route;