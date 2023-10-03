import { BiDotsHorizontalRounded } from "react-icons/bi";
const UserCard = () => {
  return (
    <>
        <div className="transition-all duration-[0.5s] ease-out bg-gray-700 rounded-lg flex justify-between items-center p-3 select-none cursor-pointer hover:-translate-y-1">
            <div className="h-14 w-14 bg-primary-800 rounded-full relative">
                <div className="h-3 w-3 bg-green-600 absolute bottom-0 right-0 rounded-full"></div>
            </div>
            <div className="text-white capitalize">
                <h4 className="text-sm tracking-wider">Abdelali elyasraoui</h4>
                <p className="text-xs text-gray-300">Web developer</p>
            </div>
            <button className="transition-all duration-[0.5s] ease-out h-9 w-9 rounded-full  ring-1 ring-gray-400 hover:ring-2  flex justify-center items-center text-white cursor-pointer focus:rotate-90">
                <BiDotsHorizontalRounded/>
            </button>
        </div>
    </>
  )
}

export default UserCard