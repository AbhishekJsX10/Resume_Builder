import React from 'react'
import aboutImage from "../assets/AboutImage.png"

const AboutUs = () => {
  return (
    <div className='text-white about-container'>
      <div className="left-text w-[50%] ">
        <div className="section1-about flex flex-col gap-2">
          <h1 className='text-center text-[2rem]  py-5'>About Resume Builder</h1>
          <p className='text-sm'>
            We are Empowering professionals to land coveted positions at top-tier companies like BBC, Google, Apple, Tesla, and Airbnb, our online resume builder is a game-changer in the job market. With our intuitive platform, choose from a curated selection of expertly designed resume templates.
            Craft your personalized resume within minutes using industry-approved sections, meticulously tailored to impress recruiters worldwide. Each section is thoughtfully crafted to reflect your unique skills and personality, ensuring a standout application that speaks volumes.
            Our platform offers the flexibility to customize every aspect, allowing you to shape a professional-grade resume that perfectly mirrors your career aspirations and expertise.
          </p>
        </div>
        <div className="section-2-about py-6 flex flex-col">
          <h3 className='text-center text-xl mb-5'>Simple Steps to Build Professional Resume</h3>
          <p className='text-sm'>1. Select Template Fill details</p>
          <p className='text-sm'>2. Document Sections get automatically updated</p>
          <p className='text-sm'>3. Build Each section carefully</p>
          <p className='text-sm'>4. Export Resume [ ready to download ]</p>
        </div>
        <div className="section-3-about py-2 flex flex-col">
          <h3 className='text-center text-xl mb-3'>Privacy Policy</h3>
          <p className='text-sm'>1. We are collecting Nothing.</p>
          <p className='text-sm'>2. Using Secured Connection.</p>
          <p className='text-sm'>3. Use this app without any hesitation.</p>
        </div>
      </div>
      <div className="right-image w-[50%] aboutImag px-9 shadow-xl shadow-slate-300 rounded-2xl bg-[#161616]">
        <img classname="object-cover" src={aboutImage} alt="" />
      </div>
    </div>
  )
}

export default AboutUs