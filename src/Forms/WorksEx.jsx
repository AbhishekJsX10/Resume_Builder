
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSection } from '../Redux/Slices/WorkExpSlice';
import { NavLink } from 'react-router-dom';



const WorkExpBlock = ({ index, jobTitle, organizationName, startYear, endYear, handleChange, handleDeleteBlock }) => {


  return (
    <div className="flex flex-col w-full px-4 py-8  shadow-white shadow-lg rounded-lg md:w-3/4 mx-auto mb-5">
      {/* <h2 className="text-xl font-bold mb-6">Work Experience</h2> */}
      <div className="mb-4">
        <label htmlFor={`jobTitle_${index}`} className="block text-sm text-white font-medium mb-2">
          Job Title
        </label>
        <input
          type="text"
          id={`jobTitle_${index}`}
          name="jobTitle"
          value={jobTitle}
          onChange={(e) => handleChange(e, index)}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor={`organizationName_${index}`} className="block text-sm text-white font-medium mb-2">
          Organization Name
        </label>
        <input
          type="text"
          id={`organizationName_${index}`}
          name="organizationName"
          value={organizationName}
          onChange={(e) => handleChange(e, index)}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor={`startYear_${index}`} className="block text-sm font-medium text-white mb-2">
            Start Year
          </label>
          <input
            type="text"
            id={`startYear_${index}`}
            name="startYear"
            value={startYear}
            onChange={(e) => handleChange(e, index)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor={`endYear_${index}`} className="block text-sm font-medium mb-2 text-white">
            End Year (Optional)
          </label>
          <input
            type="text"
            id={`endYear_${index}`}
            name="endYear"
            value={endYear}
            onChange={(e) => handleChange(e, index)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          onClick={() => handleDeleteBlock(index)}
        >
          Delete Skill
        </button>
      </div>
    </div>
  );
};

const WorkForm = () => {


  const dispatch = useDispatch()



  const [workExpParameters, setWorkExpParameters] = useState([
    { jobTitle: '', organizationName: '', startYear: '', endYear: '' },
  ]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setWorkExpParameters(prevState => {
      const newWorkExpParameters = [...prevState];
      newWorkExpParameters[index] = {
        ...newWorkExpParameters[index],
        [name]: value
      };
      return newWorkExpParameters;
    });
  };

  const handleAddWorkExpBlock = () => {
    const newWorkExpParameters = [...workExpParameters, { jobTitle: '', organizationName: '', startYear: '', endYear: '' }];
    setWorkExpParameters(newWorkExpParameters);
    dispatch(addSection(newWorkExpParameters)); 
  };

  const handleDeleteBlock = (index) => {
    const newWorkExpParameters = [...workExpParameters];
    newWorkExpParameters.splice(index, 1);
    setWorkExpParameters(newWorkExpParameters);
  };

  return (
    <div className="flex flex-col w-full px-4 py-8 bg-[#a5a2a253] rounded-lg  shadow-white shadow-xl md:w-3/4 mx-auto">
      <h2 className="text-xl font-bold text-white mb-6">Work Experience</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {workExpParameters.map((val, index) => (
          <WorkExpBlock
            key={index}
            index={index}
            jobTitle={val.jobTitle}
            organizationName={val.organizationName}
            startYear={val.startYear}
            endYear={val.endYear}
            handleChange={handleChange}
            handleDeleteBlock={handleDeleteBlock}
          />
        ))}
        <button
          type="button"
          className="text-green-300 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 px-3 py-1 mt-6 mb-4 mx-8 rounded-md shadow-sm"
          onClick={handleAddWorkExpBlock}
        >
          Add New Experience
        </button>
      </form>
      <NavLink to="/create/edu">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          Next
        </button>
        </NavLink>
    </div>
  );
};

export default WorkForm;
