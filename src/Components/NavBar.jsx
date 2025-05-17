import React, { useState } from 'react';
import { Link, useLocation , useNavigate } from 'react-router-dom';
// import Button from './Button';

const NavBar = () => {
  const location = useLocation();
  const [head, setHead] = useState([
    { name: 'Home', link: '#home'},
    { name: 'Services', link: '#services' },
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ]);

  // const nevigate=useNavigate();
  return (
    <>
      <nav className='bg-black h-[3rem] sm:w-[100%] flex justify-between items-center fixed'>
        <div className='text-white text-2xl font-bold'>
          Logo
        </div>
        <ul className='text-white  gap-10 hidden sm:flex'>
          {
            head.map((item, index) => (
              <li key={index} className='text-lg font-semibold'>
                <a
                  href={item.link}
                  className={`hover:text-orange-400 ${
                    location.pathname === item.link ? 'text-orange-500 ' : 'text-white'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))
          }
        </ul>
        <div>w</div>
        {/* <Button/> */}
      </nav>
    </>
  );
};

export default NavBar;
