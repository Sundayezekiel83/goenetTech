import React from 'react'
import {BsPhone} from 'react-icons/bs';
import {MdOutlineSupervisorAccount} from 'react-icons/md';
import {AiOutlineUserAdd} from 'react-icons/ai';

export const Header = () => {
  return (
    <header className='bg-[#fafafa] w-full h-10 border-b border-[#f2f2f2] relative '>
    
    <div className='flex gap-4 p-2 justify-end mx-auto mr-[13rem]'>
      <span className='text-sm items-center hover:underline-offset-1 float-left relative'>Sell on AliExpress</span>
      <div className='border-r border-gray-400'></div>
      <div className=' border-gray-400 text-sm inline-flex items-center' >Help &emsp; Buyer Protection  &emsp; <BsPhone size={15} />&ensp; App </div>
       <div className='border-r border-gray-400'></div>
      <span className=' border-gray-400 text-sm '>Nigeria / English / NGN</span>
       <div className='border-r border-gray-400'></div>
     <div className='border-gray-400 text-sm inline-flex items-center'> <AiOutlineUserAdd size={15} /> &ensp; WishList &emsp; <MdOutlineSupervisorAccount size={15}/>&ensp;Account</div>
      <div className='border-r border-gray-400'></div>
    </div>

    </header>
  )
}
