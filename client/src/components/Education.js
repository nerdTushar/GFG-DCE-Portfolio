import React from 'react'

const Education = () => {
  return (
    <>
      <div className='mb-20 flex flex-col px-20 gap-10'>
        <h1 className='text-[#8154db] font-bold text-5xl'>Education</h1>
        <div className='flex flex-col gap-4 mb-10 text-white'>
            <div className='flex justify-between'>
               <div>
                  <h1>Dronacharya College of Engineering B.Tech in Computer Science Engineering</h1>
                  <h1>CGPA - 8.17 upto 6th sem</h1>
               </div>
               <div>
                  <h1>2020 - 2024</h1>
                  <h1>New Delhi, India</h1>
               </div>
            </div>
            <div className='flex justify-between'>
               <div>
                  <h1>Government Boys Senior Secondary School</h1>
                  <h1>XII Senior Secondary Science - Percentage - 66%</h1>
               </div>
               <div>
                  <h1>2016 - 2018</h1>
                  <h1>New Delhi, India</h1>
               </div>
            </div>
            <div className='flex justify-between'>
               <div>
                  <h1>Government Boys Senior Secondary School</h1>
                  <h1>X Senior Secondary - CGPA - 7.4</h1>
               </div>
               <div>
                  <h1>2011 - 2016</h1>
                  <h1>New Delhi, India</h1>
               </div>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Education
