
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'


const Header2 = () => {
  return (
        <>
    <section className='bg-white items-center shadow-md h-20'>

        <div className='flex space-x-10 mt-5 items-center justify-center'>
        
       <div className='text-[1.6rem] text-appcolor-500'> GeShipping</div>
       
<form>
    <div class="flex mt-2">
                <div class="relative w-full">
            <input type="search" className=" w-[43rem] block p-2.5  z-20 text-sm text-gray-900 bg-white rounded  border-l-2 border focus:ring-blue-500 border-blue-500 focus:border-blue-500 " placeholder="Search for city or address" required />
            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-appcolor-600 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                
            </button>
        </div>
    </div>
</form>
         <div className='flex'>
            <var><AiOutlineShoppingCart size={40} /></var><sup><span className='bg-blue-700  text-white rounded-full text-sm p-1'>2</span></sup>
         </div>

        </div>

    </section>
    </>
  )
}

export default Header2