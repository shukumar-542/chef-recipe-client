import React from 'react';
import img from '../../assets/header1.jpg'

const Home = () => {
    return (
        <div>
            <div className=''>
                <div className='flex flex-col px-10  lg:flex-row my-container lg:justify-between space-y-5 items-center mb-10 '>
                    <div className='space-y-4 text-center lg:text-left'>
                        <h1 className='font-extrabold text-5xl lg:w-1/2'>One Step Closer To Your <span className='text-purple-600'>Dream Job</span></h1>
                        <p className='text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='btn-primary'>Get Started </button>
                    </div>
                    <div className='w-4/5'>
                        <img src={img} className='rounded-lg' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;