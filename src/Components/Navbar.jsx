import React, { useState } from 'react';
import {NavLink} from "react-router-dom"

import { FaHome } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { AiFillContacts } from "react-icons/ai";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const handelMenu = () => {
    setMenuOpen(!menuOpen);
  };



const handelNavColor = (e) =>{
  return {
    color: e.isActive ? "#f1e0c5":"#fff",
    fontSize: e.isActive ? "1.1rem":"",
    textDecoration: e.isActive ? "underline":"",
    fontWeight: e.isActive ? "600":""
  }
}

  return (
    <nav className="bg-[#a5a2a253]  my-3 mx-4 rounded-xl  p-4 flex justify-between items-center shadow-lg shadow-white">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-white text-lg mx-10 font-semibold">LOGO</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-4 mx-10 text-white text-lg">
        <li className='flex'><NavLink style={(e)=>handelNavColor(e)} to="/" className="hover:text-gray-300 flex gap-1 items-center justify-center"><FaHome/>Home</NavLink></li>
        <li><NavLink style={(e)=>handelNavColor(e)} to="/myresumes" className="hover:text-gray-300 flex gap-1 items-center justify-center"><MdOutlineContactPage/>MyResume</NavLink></li>
        <li><NavLink style={(e)=>handelNavColor(e)} to="/aboutus" className="hover:text-gray-300 flex gap-1 items-center justify-center "><AiFillContacts />About-Us</NavLink></li>
      </ul>
      {/* Mobile Navigation Button */}
      <button className="md:hidden focus:outline-none" onClick={handelMenu}>
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="hamMenu absolute top-14 right-5 bg-[#202021] w-[10rem] p-4 rounded-2xl">
          <ul className="flex flex-col items-end space-y-4">
            <li><NavLink style={handelNavColor(true)} to="/" className="hover:text-gray-300 flex gap-1 items-center justify-center "><FaHome/>Home</NavLink></li>
            <li><NavLink style={handelNavColor(false)} to="/myresumes" className="hover:text-gray-300 flex gap-1 items-center justify-center  "><MdOutlineContactPage/>MyResume</NavLink></li>
            <li><NavLink style={handelNavColor(false)} to="/aboutus" className="hover:text-gray-300 flex gap-1 items-center justify-center "><AiFillContacts />About-Us</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
