/* eslint-disable react/prop-types */
import {BiEditAlt , BiTrashAlt } from "react-icons/bi";
const UserCard = ({user , deleteModal}) => {
    const generateInitials = ()=>{
        const fullNameArray  = user.fullName.split(' ');
        const initialsArray = fullNameArray .map(fullName => fullName.charAt(0))
        return initialsArray.join("");
    }
    const handleDelete = (id)=>{
        deleteModal(true , id);
    }
  return (
    <>
        <div className="transition-all duration-[0.5s] ease-out bg-gray-700 rounded-lg flex justify-between 
        items-center p-3 select-none cursor-pointer hover:-translate-y-1">
            <div className="uppercase flex items-center justify-center h-14 w-14 bg-primary-400 text-primary-900 rounded-full relative">
                {generateInitials()}
                <div className={`${user.status ? 'bg-green-600' : 'bg-red-600'} animate-ping h-2 w-2  absolute bottom-1 right-0 rounded-full`}></div>
            </div>
            <div className="text-white capitalize">
                <h4 className="text-sm tracking-wider">{user.fullName}</h4>
                <p className="text-xs text-gray-300">{user.role}</p>
            </div>
            <div className="flex justify-between items-center space-x-4">
            <button className="transition-all duration-[0.5s] ease-out h-9 w-9 rounded-full  ring-1 ring-gray-400  hover:bg-green-600  flex justify-center items-center text-white cursor-pointer">
                <BiEditAlt/>
            </button>
            <button onClick={()=>{handleDelete(user.id)}} className="transition-all duration-[0.5s] ease-out h-9 w-9 rounded-full  ring-1 ring-gray-400  hover:bg-red-600  flex justify-center items-center text-white cursor-pointer">
                <BiTrashAlt/>
            </button>
            </div>
        </div>
    </>
  )
}

export default UserCard