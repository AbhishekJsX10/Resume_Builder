

import React from 'react';
import { NavLink } from 'react-router-dom';

const Preview = () => {
  return (
    <>    
    <div className=" w-full h-full py-10 justify-center gap-9 items-center relative flex preview-container">
      <div className="flex justify-center items-center h-1/2 relative">
        <img
          src="https://d.novoresume.com/images/doc/functional-resume-template.png"
          alt="Resume Preview"
          className="w-[20rem] h-[27.6rem] object-cover rounded-lg shadow-xl"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity flex justify-center items-center">
          <NavLink to="/myresumes">
          <button
            type="button"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"
          >
            View
          </button>
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-1/2 text-center text-gray-700">
        <p className="font-bold text-xl mb-4">Download Your Resume</p>
        <NavLink to="/myresumes">
        <button
          type="button"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Download Now
        </button>
        </NavLink>
      </div>
    </div>
    </>
  );
};

export default Preview;
