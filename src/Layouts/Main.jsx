import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet, } from 'react-router-dom';


const Main = () => {




    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-150px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;