
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import ProfileForm from '../Forms/ProfileForm';
import EducationForm from '../Forms/EducationForm';
import KeySkillsForm from '../Forms/KeySkillsForm';
import WorkForm from "../Forms/WorksEx"


import { CgProfile } from "react-icons/cg";
import { MdOutlineWork } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { FaPenSquare } from "react-icons/fa";


const Sidebar = () => {
  const { id } = useParams(); 
  const handleSideColor = (isActive) => { 
    return {
      color: isActive ? '#3399ff' : '', 
      borderBottom: isActive ? '2px solid #3399ff' : '2px solid #fff',
    };
  };

  return (
    <>
      <div className='hero-contianer flex mx-12 gap-10 my-7'>
        <div className='bg-[#a5a2a253] shadow-lg shadow-slate-100 text-white w-[12rem] h-[16.3rem] flex-shrink-0 rounded-xl sidebar'>
          <ul className='flex flex-col h-[15rem] w-[12rem] justify-center items-center gap-3'>
            <li className='flex justify-center items-center'>
              <NavLink
                style={handleSideColor(id === 'personalinfo')} 
                to='/create/personalinfo'
                className='py-2 px-4 hover:bg-gray-700 flex  justify-center items-center'
              >
                <CgProfile  /> 
                Personal Info
              </NavLink>
            </li>
            <li>
              <NavLink
                style={handleSideColor(id === 'workexp')} 
                to='/create/workexp'
                className='py-2 px-4 hover:bg-gray-700 flex justify-center items-center'
              >
                <MdOutlineWork/>
                Work Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                style={handleSideColor(id === 'edu')} 
                to='/create/edu'
                className='py-2 px-4 hover:bg-gray-700 flex justify-center items-center'
              >
                <ImBooks/>
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                style={handleSideColor(id === 'skills')} 
                to='/create/skills'
                className='py-2 px-4 hover:bg-gray-700 flex justify-center items-center'
              >
                <FaPenSquare/>
                Key Skills
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='personal-info-form w-full'>
          {id === 'personalinfo' && <ProfileForm />}
          {id === 'workexp' && <WorkForm />}
          {id === 'edu' && <EducationForm />}
          {id === 'skills' && <KeySkillsForm />}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
