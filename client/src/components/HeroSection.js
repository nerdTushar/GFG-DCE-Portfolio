import React from 'react'
// import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import {SiGmail} from 'react-icons/si';

const HeroSection = () => {

  const ScrollDown = () => {
    window.scrollTo({top:1150,behavior:"smooth"});
  }

  return (
    <>
      <div className='flex mt-16 mb-24 px-20 items-center'>
        <div className=' w-1/2 flex flex-col gap-10'>
            <h1 className='text-4xl text-white '>Hey! I am Blockchain Developer</h1>
            <h1 className='w-5/6 text-white '>I am Tushar Patodia B-Tech. C.S.E. 3rd Year Student at Dronacharya College of Engineering
            Khentawas, Farrukh Nagar, Gurgaon, Haryana. I am generally known as Technical Head at GeeksForGeeks Student Chapter
            Dronacharya College of Engineering. I did an Internship at PerksMind Pvt. Ltd. of Full Stack Development
            for 8 weeks from 1 Aug, 2022 to 24 Sep, 2022. I am currently working on a Blockchain Technology with Cryptocurrency apart from this
            i have a lots of project on Full Stack Development as well as Web Development.</h1>
            <button className='bg-[#8154db] text-white hover:bg-[#733381] w-1/5 py-2 rounded-3xl font-bold'
            onClick={ScrollDown}>Projects</button>
        </div>
        <div className='bg-white/10 w-1/2 flex flex-col gap-4 justify-center items-center 
        rounded-3xl py-8 text-white shadow-md shadow-white/50 border-2 border-solid border-[#8154db]'>
            <div className='rounded-full overflow-hidden h-72 w-72 border-white/50 border-2 shadow-md shadow-white/50'>
                <img src='../images/tushar.jpeg' alt='not valid'/>
            </div>
            <h1 className='text-3xl'>Tushar Patodia</h1>
            <div className='flex gap-10 justify-center items-center'>
           
            <span className='flex justify-center items-center gap-3'>
               <FaLinkedinIn />
               <h1>Tushar Patodia</h1>
            </span>
            <span className='flex justify-center items-center gap-3'>
               <FaPhoneAlt />
               <h1>9599XXXXXX</h1>
            </span>
            <span className='flex justify-center items-center gap-3'>
               <SiGmail />
               <h1>tushadpatodia@gmail.com</h1>
            </span>
            
            </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
