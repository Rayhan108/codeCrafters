import Link from 'next/link';
import React from 'react';
import NavLink from './NavLinks';
import Image from 'next/image';
import logo from '@/assets/codecrafters-low-resolution-logo-black-on-transparent-background.png'
const Navbar = () => {

      const navRoutes = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '#about',
            title: 'About'
        },
        {
            path: '/services',
            title: 'Service'
        },
        {
            path: '/works',
            title: 'Works'
        },
        {
            path: '#contact',
            title: 'Contact'
        },
        {
            path: '/login',
            title: 'Login'
        },
      
    ]
    return (
        <>
         <div className="navbar bg-purple-400">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navRoutes.map(({ path, title }) => (
                            <li className='mx-2 text-black' key={path}>
                                <NavLink
                                    exact={path === '/'}
                                    activeClassName="text-white"
                                    href={path}>{title}</NavLink>

                            </li>
                        ))}
      </ul>
    </div>
   
    <Image className='w-64' src={logo} alt=""></Image>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navRoutes.map(({ path, title }) => (
                            <li className='mx-2 text-black' key={path}>
                                <NavLink
                                    exact={path === '/'}
                                    activeClassName="text-white"
                                    href={path}>{title}</NavLink>

                            </li>
                        ))}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-outline">Send Proposal</button>
  </div>
</div>   
        </>
    );
};

export default Navbar;