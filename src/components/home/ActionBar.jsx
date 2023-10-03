// import React from "react"
import { BiSearchAlt , BiPlus } from 'react-icons/bi';
const ActionBar = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-3/12 px-5 py-2 ring-1 ring-primary-800 rounded-full flex justify-between items-center">
        <input placeholder='Filter Users...' type="text" className="text-primary-50 outline-none bg-transparent border-none w-full"/>
        <BiSearchAlt className='text-primary-50 text-xl cursor-pointer transition-all duration-[0.5s] ease-out hover:scale-110'/>
      </div>
      <div>
        <button className='flex space-y-[30px] items-center transition-all duration-[0.5s] ease-out hover:bg-primary-400 outline-none mx-4 text-primary-50 bg-primary-600 py-2 px-8 rounded-full hover:outline-primary-600 hover:outline-dotted hover:outline-offset-2'>
          <BiPlus className='mr-3 text-2xl'/>
            Add User
          </button>
      </div>
    </div>
  )
}

export default ActionBar