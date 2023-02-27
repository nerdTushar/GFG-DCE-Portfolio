import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='flex px-20'>
        <div className='w-1/2 pt-10'>
           <img src='../images/portfolio-logo.png' alt='not valid logo' className='w-1/3'/>
        </div>
        <div className='w-1/2 flex items-center justify-end'>
            <ul className='flex gap-10 text-xl font-semibold text-white'>
                <li className='hover:text-[#8154db] cursor-pointer'>Home</li>
                <li className='hover:text-[#8154db] cursor-pointer'>About</li>
                <li className='hover:text-[#8154db] cursor-pointer'>Contact</li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
