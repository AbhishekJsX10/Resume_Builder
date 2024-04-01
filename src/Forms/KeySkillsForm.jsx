
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSkill, deleteSkill } from '../Redux/Slices/SkillsFromSlice';
import { NavLink } from 'react-router-dom';

const SkillForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    SkillDetails: [{ skill: '', level: '' }],
  });

  const handleChange = (index, event) => {
    const newSkillDetails = [...formData.SkillDetails];
    newSkillDetails[index][event.target.name] = event.target.value;
    setFormData({ ...formData, SkillDetails: newSkillDetails });
  };

  const handleaddSkill = () => {
    setFormData({
      ...formData,
      SkillDetails: [
        ...formData.SkillDetails,
        { skill: '', level: '' },
      ],
    });
    dispatch(addSkill(formData.SkillDetails)); // Dispatch addSkill with updated data
  };

  const handleDeleteSkill = (index) => {
    const newSkillDetails = [...formData.SkillDetails];
    newSkillDetails.splice(index, 1);
    setFormData({ ...formData, SkillDetails: newSkillDetails });
    dispatch(deleteSkill(index)); // Dispatch deleteSkill with index
  };

  return (
    <div className="flex flex-col w-full px-4 py-8 bg-[#a5a2a253] ounded-lg  shadow-white shadow-xl md:w-3/4 mx-auto">
      <h2 className="text-xl font-bold mb-6 text-white">Skill Details</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {formData.SkillDetails.map((Skill, index) => (
          <div key={index} className="mb-4 border rounded-md p-4 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor={`skillType-${index}`} className="block text-white text-sm font-medium mb-2">
                  Skill Type
                </label>
                <input
                  type="text"
                  id={`skillType-${index}`}
                  name="skill"
                  value={Skill.skill}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`skillLevel-${index}`} className="block text-white text-sm font-medium mb-2">
                  Skill Description
                </label>
                <input
                  type="text"
                  id={`skillLevel-${index}`}
                  name="level"
                  value={Skill.level}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
                />
              </div>
            </div>
            <button
              type="button"
              className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 px-3 py-1 rounded-md shadow-sm"
              onClick={() => handleDeleteSkill(index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          className="text-white  bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          onClick={handleaddSkill}
        >
          Add Skill
        </button>
      </form>
      <NavLink to="/preview" className="flex justify-center items-center">
        <button className="bg-blue-500 mt-4  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Preview
        </button> 
      </NavLink>
    </div>
  );
};

export default SkillForm;

