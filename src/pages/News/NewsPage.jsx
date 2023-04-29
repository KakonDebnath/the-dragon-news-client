import React from 'react';
import Header from '../Shared/Header';
import MarqueeNews from '../Shared/MarqueeNews';
import Navbar from '../Shared/Navbar';
import RightSidebar from '../Shared/RightSidebar';
import { Outlet, useLoaderData } from 'react-router-dom';

const NewsPage = () => {
    return (
        <div className='container'>
                <Header />
                <MarqueeNews />
                <Navbar />
                <div className='row mt-5'>
                    <div className='col-md-8'>
                        <Outlet></Outlet>
                    </div>
                    <div className='col-md-4'>
                        <RightSidebar />
                    </div>
                </div>
        </div>
    );
};

export default NewsPage;