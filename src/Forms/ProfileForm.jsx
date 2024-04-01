import React from 'react';
import {useSelector,useDispatch} from "react-redux"
import {setImage,setFirstName,setLastName,setEmail,setMobile,setAddress,setCity,setState,setPostalCode,setCountry,setObjective} from "../Redux/Slices/ProfileForm"
import { NavLink } from 'react-router-dom';
import {uploadImage} from "../Redux/Slices/ImageSlice"

const ProfileForm = () => {

const dispatch = useDispatch()
const {image,FirstName,LastName,Email,Mobile,Address,City,State,Country,PostalCode,Objective} = useSelector((state)=>state.ProfileForm)


const handleImageUpload = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const imageDataURL = reader.result;
    dispatch(uploadImage(imageDataURL)); // Dispatch the action to store the image data
  };

  reader.readAsDataURL(file);
};


  return (
    <div className="flex flex-col w-full px-4 py-8 bg-[#a5a2a253] rounded-lg  shadow-white shadow-xl md:w-3/4 mx-auto">
      <h2 className="text-xl text-white font-bold mb-6">Personal Info</h2>
      <form onSubmit={(e) => e.preventDefault()}>
      <div className="mb-4">
          <label className="text-white" htmlFor="profileImage">Profile Image (Optional)</label>
          <input
            required
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            onChange={(e)=>handleImageUpload(e)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 text-white focus:outline-none focus:ring-indigo-500 focus:ring-1"
          />
      </div>

        <div className='flex justify-evenly items-center gap-5'>
        <div className="mb-4 w-[23.5rem]">
          <label htmlFor="firstName" className="block text-white text-sm font-medium mb-2">
            First Name
          </label>
          <input
            required
            type="text"
            id="firstName"
            name="firstName"
            value={FirstName}
            onChange={(e)=>dispatch(setFirstName(e.target.value))}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
          />
        </div>
        <div className="mb-4 w-[23.5rem]">
          <label htmlFor="lastName" className="block text-sm text-white font-medium mb-2">
            Last Name
          </label>
          <input
            required
            type="text"
            id="lastName"
            name="lastName"
            value={LastName}
            onChange={(e)=>dispatch(setLastName(e.target.value))}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
          />
        </div>
        </div>

        <div className='flex justify-evenly items-center gap-5'>
        <div className="mb-4 w-[23.5rem]">
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={Email}
            onChange={(e)=>dispatch(setEmail(e.target.value))}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
          />
        </div>
        <div className="mb-4 w-[23.5rem]">
          <label htmlFor="mobile" className="block text-white text-sm font-medium mb-2">
            Mobile
          </label>
          <input
            required
            type="tel"
            id="mobile"
            name="mobile"
            value={Mobile}
            onChange={(e)=>dispatch(setMobile(e.target.value))}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
          />
        </div>
        </div>

        <div className="mb-4 ">
          <label htmlFor="address" className="block text-sm font-medium text-white mb-2">
            Address
          </label>
          <textarea
            required
            id="address"
            name="address"
            value={Address}
            onChange={(e)=>dispatch(setAddress(e.target.value))}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium mb-2 text-white">
              City
            </label>
            <input
              required
              type="text"
              id="city"
              name="city"
              value={City}
              onChange={(e)=>dispatch(setCity(e.target.value))}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block text-white text-sm font-medium mb-2">
              State
            </label>
            <input
              required
              type="text"
              id="state"
              name="state"
              value={State}
              onChange={(e)=>dispatch(setState(e.target.value))}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="postalCode" className="block text-sm text-white font-medium mb-2">
              Postal Code
            </label>
            <input
              required
              type="text"
              id="postalCode"
              name="postalCode"
              value={PostalCode}
              onChange={(e)=>dispatch(setPostalCode(e.target.value))}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="objective" className="block text-sm font-medium text-white mb-2">
            Objective
          </label>
          <textarea
            required
            id="objective"
            name="objective"
            value={Objective}
            onChange={(e)=>dispatch(setObjective(e.target.value))}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
          />
        </div>
        <NavLink to="/create/workexp">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-500 text-[aliceblue] font-bold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          Next
        </button>
        </NavLink>
      </form>
    </div>
  );
};

export default ProfileForm;
