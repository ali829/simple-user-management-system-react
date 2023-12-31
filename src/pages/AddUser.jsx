import Form from "../components/home/Form"
import { useEffect, useState } from "react"
const AddUser = () => {
    const [users, setUsers] = useState([])
    const createUser = (userData)=>{
        let updatedUsers = [...users , userData]
        setUsers(updatedUsers)
        localStorage.setItem('users' , JSON.stringify(updatedUsers))
    }
    useEffect(()=>{
        const getStoredUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(getStoredUsers)
    },[])
  return (
    <div className="w-4/6 max-lg:w-full mx-auto">
        <Form submitHandler={createUser} formTitle='add user'/>
    </div>
  )
}

export default AddUser