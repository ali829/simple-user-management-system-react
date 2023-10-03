// import React from "react"
import { BiSearchAlt } from 'react-icons/bi';
const ActionBar = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-3/12 px-5 py-2 ring-1 ring-primary-800 rounded-full flex justify-between items-center">
        <input placeholder='Filter Users...' type="text" className="text-primary-50 outline-none bg-transparent border-none w-full"/>
        <BiSearchAlt className='text-primary-50 text-xl cursor-pointer'/>
      </div>
      <div>
        <button className='outline-none mx-4 text-primary-50 bg-gray-800 py-2 px-8 rounded-full focus:outline-primary-600 focus:outline-dotted focus:outline-offset-2'>Manage</button>
        <button className='outline-none mx-4 text-primary-50 bg-primary-600 py-2 px-8 rounded-full focus:outline-primary-600 focus:outline-dotted focus:outline-offset-2'>Add User</button>
      </div>
    </div>
  )
}

export default ActionBar