import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const LeftSidebar = () => {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => { 
        fetch('https://the-news-dragon-server-kakondebnath.vercel.app/categories')
          .then(res => res.json())
          .then(data => setCategoryList(data))
          .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            {
                categoryList.map(listItem => {
                    return (
                        <p key={listItem.id} className='mb-0 px-3 py-2'>
                            <NavLink to={`/category/${listItem.id}`} className={({ isActive }) => isActive ? " text-decoration-none px-4 py-2 bg-primary text-white rounded fs-6" : "text-decoration-none text-black"}>
                                {listItem.name}
                            </NavLink>
                        </p>
                    )
                })
            }
        </div>
    );
};

export default LeftSidebar;