import React from 'react'

const TechnicalSkills = () => {
  return (
    <>
      <div className='flex flex-col px-20 gap-10 mb-20'>
        <h1 className='text-[#8154db] font-bold text-5xl'>Technical Skills</h1>
        <div className='flex flex-col gap-2 mb-10'>
            <span className='flex gap-4 text-white items-center'>
              <h1 className='text-[#8154db] text-2xl'>Languages</h1> -
              <h1>C, C++, JavaScript, Python, Java, HTML, CSS, Solidity.</h1>
            </span>
            <span className='flex gap-4 text-white items-center'>
              <h1 className='text-[#8154db] text-2xl'>Technologies/Frameworks</h1> -
              <h1>Blockchain, IPFS, Cryptocurrency, Smart Contract, NFT, GitHub, Git,
                  Bootstrap, Tailwind, ReactJS, NodeJS, ExpressJS, Redux, VM on Microsoft Azure Cloud.
              </h1>
            </span>
            <span className='flex gap-4 text-white items-center'>
              <h1 className='text-[#8154db] text-2xl'>Database</h1> -
              <h1>MongoDB, My SQL.</h1>
            </span>
            <span className='flex gap-4 text-white items-center'>
              <h1 className='text-[#8154db] text-2xl'>Others</h1> -
              <h1>OOPS, Data Structure and Algorithms, Competitive Programming, DBMS.</h1>
            </span>
            <span className='flex gap-4 text-white items-center'>
              <h1 className='text-[#8154db] text-2xl'>Software</h1> -
              <h1>Canva, Figma ( UI/UX ), Photoshop, Adobe Premiere Pro.</h1>
            </span>
            <span className='flex gap-4 text-white items-center'>
              <h1 className='text-[#8154db] text-2xl'>Soft Skills</h1> -
              <h1>Time Management, Teamwork, Communication, Problem Solving, Leadership.</h1>
            </span>
        </div>
      </div>
    </>
  )
}

export default TechnicalSkills
