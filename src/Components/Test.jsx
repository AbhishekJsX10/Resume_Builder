
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import jsPDF from 'jspdf';

const Test = () => {

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


    <div className='flex downloads flex-col items-center justify-center'>
      <div id="resume-content" className='flex justify-center items-center px-[5rem] py-7 w-[50%] mx-auto'>
      <div  className="frame">
        <div className="empty">
            <div className="empty-left"></div>
            <div className="empty-right"></div>
        </div>        
        <div className="imageSection">
            <div className="imageSection-part1">
                <div className="squarediv">
                    {imageDataURL && <img src={imageDataURL} alt="Uploaded" />}
                </div>
            </div>
            <div className="imageSection-part2">
                <h3>{FirstName}</h3>
                <h3>{LastName}</h3>
            </div>
        </div>
        <div className="hero text-black">
            <div className="hero-left">
                <div className="hero-left-profile">
                    <h5>PROFILE</h5>
                    <p>{Objective}</p>
                </div>
                <div className="hero-left-contact">
                    <h5>Contact ME</h5>
                    <div className="contact">
                        <p><i className="ri-phone-line"></i></p>
                        <p>{Mobile}</p>
                    </div>
                    <div className="contact">
                        <p><i className="ri-mail-line"></i></p>
                        <p>{Email}</p>
                    </div>
                    <div className="contact w-[12rem]">
                        <p><i className="ri-home-7-line"></i></p>
                        <div className='text-[0.8rem] '>
                        <p>{Address}</p>
                        <p>{City}-{PostalCode}</p>
                        <p className=''>{State}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-right bg-white">
                <div className="hero-right-education">
                    <div className="Education-heaing">
                        <i className="ri-arrow-drop-right-line"></i>
                        <h4>EDUCATION</h4>
                    </div>
                    {AllEducationData.map((val,i)=>{
                        return <div key={i} className="education-1" >
                                  <h5>{val.university?val.university:""}</h5>
                                  <p>{val.startYear?val.startYear:""}-{val.endYear?val.endYear:""}</p>
                                  <p>{val.degree?val.degree:""}</p>
                                </div>
                    })}
                </div>
                <div className="hero-right-skills">
                    <div className="Education-heaing">
                        <i className="ri-arrow-drop-right-line"></i>
                        <h4>SKILLS</h4>
                    </div>
                    {
                      AllSkillsData.map((val,i)=>{
                        return <div key={i} className='flex flex-col gap-1'>
                            <p>{val.skill? val.skill : "" }</p>
                            <p>{val.level? val.level : "" }</p>
                            </div>
                                
                      })
                    }
                </div>
                <div className="hero-right-workexp">
                    <div className="Education-heaing">
                        <i className="ri-arrow-drop-right-line"></i>
                        <h4>WORK EXPERIANCE</h4>
                    </div>
                    {
                    AllSectionsData.map((val,i)=>{
                      return <div key={i} className="works">
                                <h3>{val.jobTitle?val.jobTitle:""}</h3>
                                <p>{val.organizationName?val.organizationName:""}</p>
                                <p>{val.startYear?val.startYear:""}-{val.endYear?val.endYear:""}</p>
                            </div>
                      })
                    } 
                </div>
            </div>
        </div>
        </div>

      </div>
      <div className='flex items-center justify-center w-auto h-[10rem]'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={generatePdf}>Download PDF</button>
      </div>
    </div>
    </>
  );
};

export default Test;


