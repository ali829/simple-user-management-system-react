import ActionBar from "../components/home/ActionBar";
import UserCard from '../components/home/UserCard'
const home = () => {
  return (
    <>
      <ActionBar/>
      <div className="grid grid-cols-3 w-full my-16 gap-2">
        <UserCard/>
      </div>
    </>
  )
}

export default home