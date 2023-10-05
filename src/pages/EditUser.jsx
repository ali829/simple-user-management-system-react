
import Form from "../components/home/Form"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
const EditUser = () => {
    const [users, setUsers] = useState([])
    // const [currentUser,setCurrentUser] = useState({})
    const {id} = useParams('id');
    const getUserInformations = ()=>{
        const filterUsers = users.find(user => user.id === parseInt(id))
        // setCurrentUser(fillterUsers)
        return filterUsers
    }
    const editUser = (userData)=>{
        const updateUser = users.map(user => user.id === parseInt(id) ? user = {...userData} : user)
        console.log(updateUser)
        setUsers(updateUser);
        localStorage.setItem('users',JSON.stringify(updateUser))
    }
    useEffect(()=>{
        const getStoredUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(getStoredUsers)
        getUserInformations();
    },[])
    // useEffect(()=>{
    //     console.log(currentUser)
    // },[currentUser])
  return (
    <div className="w-4/6 max-lg:w-full mx-auto">
        <Form submitHandler={editUser} currentData={getUserInformations} edit={true} formTitle='edit user'/>
    </div>
  )
}

export default EditUser

// let updatedUsers = [...users , userData]
        // setUsers(updatedUsers)
        // localStorage.setItem('users' , JSON.stringify(updatedUsers))