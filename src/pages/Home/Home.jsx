import React from 'react';
import Header from '../Shared/Header';
import MarqueeNews from '../Shared/MarqueeNews';
import Navbar from '../Shared/Navbar';
import LeftSidebar from '../Shared/LeftSidebar';
import RightSidebar from '../Shared/RightSidebar';
import NewsMainContent from './NewsMainContent';

const Home = () => {
    return (
        <>
            <Header />
            <MarqueeNews />
            <Navbar />
            <div className='row mt-5'>
                <div className='col-lg-3'>
                    <LeftSidebar/>
                </div>
                <div className='col-lg-6'>
                   <NewsMainContent></NewsMainContent>
                </div>
                <div className='col-lg-3'>
                    <RightSidebar/>
                </div>
            </div>
        </>
    );
};

export default Home;