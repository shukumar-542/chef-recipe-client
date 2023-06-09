import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import Blog from '../Pages/Blog/Blog';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Login/Register/Register';
import ChefRecipe from '../Pages/ChefRecipe/ChefRecipe';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute';

const route = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
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
            },
            
        ]
        

    },
    {
        path : 'recipe',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children :[
            {
                path : ':id',
                element : <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
                
            }
        ]
    }
])

export default route;