import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center py-4'>
            <img className='img-fluid' src={logo} alt="" />
            <p className='text-secondary mb-0'>Journalism Without Fear or Favour</p>
            <p className='mb-0'>{moment().format("dddd")} <span className='text-secondary'>{moment().format("MMMM DD, YYYY")}</span></p>
        </div>
    );
};

export default Header;