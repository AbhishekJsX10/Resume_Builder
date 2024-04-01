import React from 'react';
import { templates } from '../Utils/ResumeTemplate';
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {setImage,setFirstName,setLastName,setEmail,setMobile,setAddress,setCity,setState,setPostalCode,setCountry,setObjective} from "../Redux/Slices/ProfileForm"
const Card = ({ imageSrc }) => {

  const dispatch = useDispatch()

  const handelClick = () =>{
    dispatch(setFirstName(""))
    dispatch(setAddress(""))
    dispatch(setLastName(""))
    dispatch(setEmail(""))
    dispatch(setMobile(""))
    dispatch(setCity(""))
    dispatch(setPostalCode(""))
    dispatch(setState(""))
    dispatch(setCountry(""))
    dispatch(setObjective(""))
  }


  return (
    <div className=" cards  group shadow-lg shadow-zinc-500 relative w-[18rem] h-[25rem]  overflow-hidden rounded-lg ">
      <img
        className="w-full h-full object-top object-cover group-hover:opacity-50 transition duration-300 ease-in-out"
        src={imageSrc}
        alt="Card Image"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out flex items-center justify-center">
        <button onClick={()=>handelClick()} className="bg-white text-gray-700 hover:opacity-90 font-bold py-2 px-4 rounded-md focus:outline-none">
          <Link to="/create/personalinfo">Continue</Link>
        </button>
      </div>
    </div>
  );
}


 
const Home = () => {
  const {FirstName,LastName,Email,Mobile,Address,City,State,Country,PostalCode,Objective} = useSelector((state)=>state.ProfileForm)
  return (
    <>
    <div className='home-container'>
      <div className='py-2 px-10'>
        <h2 className=' font-bold text-3xl text-white'>Templates</h2>
        <p className=' font-[600] text-lg text-white'>Select your resume template</p>
      </div>
      <div className=' resumeTemplates py-3 px-10 flex flex-wrap justify-evenly items-center gap-5'>
        {
          templates.map((val,i)=>{
            return <Card key={i} imageSrc={val}/>
          })
        }
      </div>
    </div>
    </>
  )
}

export default Home;

