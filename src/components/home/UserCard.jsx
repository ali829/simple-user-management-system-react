/* eslint-disable react/prop-types */
import { BiDotsHorizontalRounded } from "react-icons/bi";
const UserCard = ({user}) => {
    const generateInitials = ()=>{
        const fullNameArray  = user.fullName.split(' ');
        const initialsArray = fullNameArray .map(fullName => fullName.charAt(0))
        return initialsArray.join("");
    }
  return (
    <>
        <div className="transition-all duration-[0.5s] ease-out bg-gray-700 rounded-lg flex justify-between 
        items-center p-3 select-none cursor-pointer hover:-translate-y-1">
            <div className="uppercase flex items-center justify-center h-14 w-14 bg-primary-400 text-primary-900 rounded-full relative">
                {generateInitials()}
                <div className={`border-2 ${user.status ? 'border-green-600' : 'border-red-600'} h-3 w-3  absolute bottom-0 right-0 rounded-full`}></div>
            </div>
            <div className="text-white capitalize">
                <h4 className="text-sm tracking-wider">{user.fullName}</h4>
                <p className="text-xs text-gray-300">{user.role}</p>
            </div>
            <button className="transition-all duration-[0.5s] ease-out h-9 w-9 rounded-full  ring-1 ring-gray-400 hover:ring-2  flex justify-center items-center text-white cursor-pointer focus:rotate-90">
                <BiDotsHorizontalRounded/>
            </button>
        </div>
    </>
  )
}

export default UserCard