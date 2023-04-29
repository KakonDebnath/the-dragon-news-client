import React from 'react';
import Marquee from "react-fast-marquee";
import Navbar from './Navbar';

const MarqueeNews = () => {
    return (
        <div className='d-flex px-3 py-2 gap-4' style={{backgroundColor: "#F3F3F3"}}>
            <button className='btn btn-danger'>Latest</button>
            <Marquee>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default MarqueeNews;