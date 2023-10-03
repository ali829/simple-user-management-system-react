import { useEffect, useState } from "react";
import ActionBar from "../components/home/ActionBar";
import UserCard from '../components/home/UserCard';
import EmptyResult from '../components/home/EmptyResult'
const Home = () => {
  let data = [
    {
      fullName:'Abdelali elyasraoui',
      role:'Web developer',
      age:20,
      status: false,
      salary: 10000
    },
    {
      fullName:'mark huez',
      role:'UI/UX designer',
      age:23,
      status: false,
      salary: 9000
    },
    {
      fullName:'leo hernandez',
      role:'Scrum master',
      age:20,
      status: true,
      salary: 10000
    },
  ]
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    setUsers(data)
  },[users])
  return (
    <>
      <ActionBar/>
        {(users.length < 1) ? (<EmptyResult/>) : 
        (<div className="grid grid-cols-3 w-full my-16 gap-2">
         { users.map((user , index) => (
            <UserCard user={user} key={index} />
         ))}
        </div>)
        }
    </>
  )
}

export default Home