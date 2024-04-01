



import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import jsPDF from 'jspdf';
import Test from './Test';

const MyResumes = () => {

  const { FirstName, LastName, Email, Mobile, Address, City, State, Country, PostalCode, Objective } = useSelector((state) => state.ProfileForm);
  const sectionsData = useSelector((state) => state.WorkExp);
  const AllSectionsData = sectionsData.sections[sectionsData.sections.length - 1];
  const educationData = useSelector((state) => state.EducationForm);
  const AllEducationData = educationData.educationSection[educationData.educationSection.length - 1];
  const skillsData = useSelector((state) => state.SkillForm);
  const AllSkillsData = skillsData.skillSection[skillsData.skillSection.length - 1];
  const imageDataURL = useSelector(state => state.image.imageDataURL);

  const generatePdf = async() => {
    const doc = new jsPDF('portrait', 'pt', 'a3');
    const content = document.getElementById('resume-content');

    doc.html(content, {
      callback: function (pdf) {
        const pdfBlob = pdf.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        pdf.save('resume.pdf');
      }
    });

  };

  return (
    <>

{FirstName && LastName && Email && Mobile && Address && City && State && PostalCode && Objective && AllSectionsData && AllEducationData && AllSkillsData && imageDataURL ? (
    <Test/>
) : (
  <div className='flex flex-col items-center justify-center pt-16 px-auto'>
    <h2 className='text-white text-center text-900 myresumetext'>Please fill the all the details first!!!</h2>
    <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png" alt="" />
  </div>
)}
    </>
  );
};

export default MyResumes;


