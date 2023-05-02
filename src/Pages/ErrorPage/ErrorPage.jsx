import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import notfound from  '../../assets/notfound.jpg'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div className='flex flex-col items-center justify-center h-screen p-16  text-gray-900'>
            <img src={notfound} alt="" />
            <Link
              to='/'
              className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
            >
              Back to homepage
            </Link>
            
        </div>
    );
};

export default ErrorPage;