import React from 'react';
import Header from '../Shared/Header';
import MarqueeNews from '../Shared/MarqueeNews';
import LeftSidebar from '../Shared/LeftSidebar';
import RightSidebar from '../Shared/RightSidebar';
import Navbar from '../Shared/Navbar';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <>
            <Header />
            <MarqueeNews />
            <Navbar />
            <div className='row mt-5'>
                <div className='col-md-3'>
                    <LeftSidebar />
                </div>
                <div className='col-md-6'>
                    <h4>Dragon News Home</h4>
                    {
                        categoryNews.map(news => <NewsCard key={news._id} news={news}/>)
                        
                    }
                </div>
                <div className='col-md-3'>
                    <RightSidebar />
                </div>
            </div>
        </>
    );
};

export default Category;