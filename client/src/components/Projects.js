import React from 'react'

const Projects = () => {
  return (
    <>
      <div className='flex flex-col px-20 gap-10 mb-20'>
        <h1 className='text-[#8154db] font-bold text-5xl'>Projects</h1>
        <div className='flex flex-col gap-10 mb-10 text-white'>
            <div className='flex flex-col gap-4'>
            <span className='flex gap-4 items-center'>
            <h1 className='text-2xl font-semibold text-[#8154db] hover:text-[#733381] cursor-pointer'>Block4Health</h1> |
            <h1>Blockchain, IPFS, Cryptocurrency, Smart Contract, MERN, Redux, Tailwind</h1>
            </span>
            <h1>This Project provide the patients to store and share their EHR. Having full control on who can view or edit their 
                health records. And, also to provide a platform for sharing of their health record with research institutes.
            </h1>
            <button className='bg-[#8154db] text-white hover:bg-[#733381] w-36 py-2 rounded-3xl font-bold'>Live Here</button>
            </div>

            <div className='flex flex-col gap-4'>
            <span className='flex gap-4 items-center'>
            <h1 className='text-2xl font-semibold text-[#8154db] hover:text-[#733381] cursor-pointer'>TransactionKrypt</h1> |
            <h1> Blockchain, Cryptocurrency, Smart Contract, ReactJS, Tailwind</h1>
            </span>
            <h1>This project will help to trade in cryptocurrency that allows users to send transactions through the blockchain, 
                each transaction will be paired with a gif and it will be forever stored on blockchain.
            </h1>
            <button className='bg-[#8154db] text-white hover:bg-[#733381] w-36 py-2 rounded-3xl font-bold'>Live Here</button>
            </div>

            <div className='flex flex-col gap-4'>
            <span className='flex gap-4 items-center'>
            <h1 className='text-2xl font-semibold text-[#8154db] hover:text-[#733381] cursor-pointer'>PizzaShop</h1> |
            <h1> MERN , Redux , Stripe , Bootstrap</h1>
            </span>
            <h1> User authenticated web app in which user can order their favourite pizza and can view their order history with
                 a support of an admin panel.
            </h1>
            <button className='bg-[#8154db] text-white hover:bg-[#733381] w-36 py-2 rounded-3xl font-bold'>Live Here</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Projects
