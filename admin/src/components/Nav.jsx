import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';
import { MdDashboard } from "react-icons/md";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoAddCircle } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className='h-screen w-[13%] bg-[#ffb701]'>
      <div className="main w-full ml-10 mt-9 h-[70%] flex flex-col items-center justify-start gap-10">
        <div className="menu-box w-full h-[60px] flex items-center justify-center gap-3 p-2 rounded-full">
          <span className="icon"><MdDashboard /></span>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Dashboard
          </NavLink>
        </div>
        <div className="menu-box w-full h-[60px] flex items-center justify-center gap-3 p-2 rounded-full">
          <span className="icon"><IoAddCircle /></span>
          <NavLink 
            to="/add" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Add Item
          </NavLink>
        </div>
        <div className="menu-box w-full h-[60px] flex items-center justify-center gap-3 p-2 rounded-full">
          <span className="icon"><FaPenToSquare /></span>
          <NavLink 
            to="/order" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Orders
          </NavLink>
        </div>
        <div className="menu-box w-full h-[60px] flex items-center justify-center gap-3 p-2 rounded-full">
          <span className="icon"><FaMagnifyingGlassChart /></span>
          <NavLink 
            to="/analysis" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Analysis
          </NavLink>
        </div>
        <div className="menu-box w-full h-[60px] flex items-center justify-center gap-3 p-2 rounded-full">
          <span className="icon"><CgProfile /></span>
          <NavLink 
            to="/customer" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Customers
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
