import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';

const Main = () => {
    return (
        <div className='container'>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;