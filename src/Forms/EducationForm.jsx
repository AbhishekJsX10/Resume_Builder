
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEducation,deleteEducation } from '../Redux/Slices/EducationFormSlice';
import { NavLink } from 'react-router-dom';

const EducationForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    educationDetails: [{ educationType: '', university: '', degree: '', startYear: '', endYear: '' }],
  });

  const handleChange = (index, event) => {
    const newEducationDetails = [...formData.educationDetails];
    newEducationDetails[index][event.target.name] = event.target.value;
    setFormData({ ...formData, educationDetails: newEducationDetails });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      educationDetails: [
        ...formData.educationDetails,
        { educationType: '', university: '', degree: '', startYear: '', endYear: '' },
      ],
    });
    dispatch(addEducation(formData.educationDetails)); // Dispatch addEducation with updated data
  };

  const handleEducationDelete = (index) => {
    const newEducationDetails = [...formData.educationDetails];
    newEducationDetails.splice(index, 1);
    setFormData({ ...formData, educationDetails: newEducationDetails });
    dispatch(deleteEducation(index)); // Dispatch deleteEducation with index
  };

  return (
    <div className="flex flex-col w-full px-4 py-8 bg-[#a5a2a253] shadow-white shadow-lg rounded-lg md:w-3/4 mx-auto">
      <h2 className="text-xl text-white font-bold mb-6">Education Details</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {formData.educationDetails.map((education, index) => (
          <div key={index} className="mb-4 border rounded-md p-4 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor={`educationType-${index}`} className="block  text-white  text-sm font-medium mb-2">
                  Education Type
                </label>
                <input
                  type="text"
                  id={`educationType-${index}`}
                  name="educationType"
                  value={education.educationType}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`university-${index}`} className="block text-white text-sm font-medium mb-2">
                  University
                </label>
                <input
                  type="text"
                  id={`university-${index}`}
                  name="university"
                  value={education.university}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`degree-${index}`} className="block text-sm text-white  font-medium mb-2">
                  Degree
                </label>
                <input
                  type="text"
                  id={`degree-${index}`}
                  name="degree"
                  value={education.degree}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor={`startYear-${index}`} className="block text-sm  text-white font-medium mb-2">
                    Start Year
                  </label>
                  <input
                    type="text"
                    id={`startYear-${index}`}
                    name="startYear"
                    value={education.startYear}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor={`endYear-${index}`} className="block text-sm font-medium  text-white  mb-2">
                    End Year (Optional)
                  </label>
                  <input
                    type="text"
                    id={`endYear-${index}`}
                    name="endYear"
                    value={education.endYear}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 px-3 py-1 rounded-md shadow-sm"
              onClick={() => handleEducationDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          onClick={handleAddEducation}
        >
          Add Education
        </button>
      </form>
      <NavLink to="/create/skills" className="mt-4">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          Next
        </button>
        </NavLink>
    </div>
  );
};

export default EducationForm;
