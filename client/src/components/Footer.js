import React from 'react'
import {SiGmail} from 'react-icons/si';
import {BsInstagram , BsLinkedin, BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <div className='px-20 flex flex-col items-center gap-10 pb-20'>
        <h1 className='text-5xl font-bold text-[#8154db]'>GET IN TOUCH</h1>
        <h1 className='text-white'>DO U HAVE HAVE A NEW PROJECT OR JOB FOR ME?
            OR JUST WANT TO HAVE A CHAT ,FEEL FREE TO CONNECT.
        </h1>
        <div className='flex gap-20 text-3xl'>
           <SiGmail className='fill-white' />
           <BsInstagram className='fill-white'/>
           <BsLinkedin className='fill-white' />
           <BsGithub className='fill-white' />
        </div>
      </div>
    </>
  )
}

export default Footer
