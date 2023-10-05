import { useEffect, useState } from "react";
import ActionBar from "../components/home/ActionBar";
import UserCard from '../components/home/UserCard';
import EmptyResult from '../components/home/EmptyResult';
import DeleteModal from "../components/home/DeleteModal";
const Home = () => {
  const [users,setUsers] = useState([]);
  const [deleteModal , setDeleteModal] = useState(false);
  const [requestedUser,setRequestedUser] = useState(null)

  /** delete functionality */
  const toggleDeleteModal = (stat , id)=>{
    setDeleteModal(stat)
    setRequestedUser(id)
  } 
  const deleteConfirm = (confirm)=>{
      if (confirm) {
        const userDeleteFilter = users.filter(user => user.id !== requestedUser)
        setUsers(userDeleteFilter);
        localStorage.setItem('users' , JSON.stringify(userDeleteFilter))
      }
  }
  /** end of delete functionality */

  useEffect(()=>{
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers)
  },[])
  return (
    <>
      <ActionBar/>
        {(users.length < 1) ? (<EmptyResult/>) : 
        (<div className="grid grid-cols-3 w-full my-16 gap-2">
         { users.map((user , index) => (
            <UserCard user={user} key={index} deleteModal={toggleDeleteModal}/>
         ))}
         <DeleteModal isOpen={deleteModal} setIsOpen={setDeleteModal} deleteConfirm={deleteConfirm}/>
        </div>)
        }
    </>
  )
}

export default Home