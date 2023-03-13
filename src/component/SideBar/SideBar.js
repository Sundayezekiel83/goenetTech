import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    
    <>
    <div className='bg-white shadow-md rounded-md w-60 h-[30rem] flex flex-col gap-4 overflow-y-auto m-10'>
           <span className='inline-flex text-sm'><AiOutlineShoppingCart size={20} /> &emsp; Telecommunitions</span>
               <span className='inline-flex text-sm'><AiOutlineShoppingCart size={20} /> &emsp; Women Cloths</span>
               <span className='inline-flex'><AiOutlineShoppingCart size={20} /> &emsp; Shoes</span>
               <span className='inline-flex'><AiOutlineShoppingCart size={20} /> &emsp; Laptops</span>
               <span className='inline-flex'><AiOutlineShoppingCart size={20} /> &emsp; Communite</span>
               <span className='inline-flex'><AiOutlineShoppingCart size={20} /> &emsp; Computer Accessories</span>
               <span className='inline-flex'><AiOutlineShoppingCart size={20} /> &emsp; Televison</span>
               <span className='inline-flex'><AiOutlineShoppingCart size={20} /> &emsp;  Jewelery and God</span>
               <span className='inline-flex'><AiOutlineShoppingCart size={20} /> &emsp; Toy Kids </span>
               <span className='inline-flex'><AiOutlineShoppingCart size={20} /> &emsp;Silver</span>

               
     </div>    


    </>
  )
}

export default SideBar