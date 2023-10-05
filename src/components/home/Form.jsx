/* eslint-disable react/prop-types */
import { useState } from "react"
import { BiBriefcaseAlt2, BiIdCard, BiMoneyWithdraw, BiUser , BiArrowBack } from "react-icons/bi"
import {useNavigate} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Notification from './Notification'


const Form = ({submitHandler}) => {
    /** push toast when click on add user */
        const [notifications, setNotifications] = useState([]);
        const removeNotif = (id) => {
            setNotifications((pv) => pv.filter((n) => n.id !== id));
        };
// $****************************************************
    const [data,setData] = useState({fullName:"",
        role:"",
        age:0,
        status:false,
        salary:0
    })
    const navigate = useNavigate();
    const goHome = ()=>{
        navigate('/')
    }

    const setFieldValue = (value,fieldName,validationFn)=>{
        if (validationFn && !validationFn(value)) {
            return;
        }
        setData(prevData => ({...prevData, [fieldName]: value }))
    }
    const validateAge = (value)=>{
        if (!isNaN(value) &&  value <= 80) {
            return true;
        }
    }
    const validateSalary = (value)=>{
        if (!isNaN(value)) {
            return true;
        }
    }
    const createUser = ()=>{
        const id = localStorage.getItem('users') !== null ? JSON.parse(localStorage.getItem('users')).length : 0
        const text = 'user created successfully'
        submitHandler({...data,id})
        setNotifications((pv) => [{text}, ...pv])
    }
  return (
    <div className="w-full h-fit bg-gray-700 rounded-lg flex flex-col p-5 shadow-l">
            <div className="w-full flex justify-between items-center">
                <h3 className="capitalize text-primary-100 text-2xl underline underline-offset-8 decoration-dashed">Add user</h3>
                <div className="grid grid-cols-2 gap-2">
                    <button className="flex items-center space-x-3 py-2 px-4 text-primary-100 rounded-md bg-gray-800 ring-1 ring-gray-400" onClick={goHome}> <BiArrowBack/> Back</button>
                    <button className="py-2 px-4 text-primary-100 rounded-md bg-secondary-800" onClick={createUser}>Save</button>
                </div>
            </div>
            <div className="w-full h-fit p-5 my-2">
                <div className="w-10/12 mx-auto my-1 flex justify-around items-center text-xl bg-primary-950 rounded-lg py-1 px-2 text-primary-100">
                    <BiUser/>
                    <input className="ml-1 w-full appearance-none outline-none bg-transparent" type="text" placeholder="Full Name" onChange={(e)=>{setFieldValue(e.target.value,'fullName')}}/>
                </div>
                <div className="w-10/12 mx-auto my-1 flex justify-around items-center text-xl bg-primary-950 rounded-lg py-1 px-2 text-primary-100">
                    <BiBriefcaseAlt2/>
                    <select  className="ml-1 w-full appearance-none outline-none bg-transparent text-center" onChange={(e)=>{setFieldValue(e.target.value,'role')}}>
                        <option className="bg-primary-950" disabled selected value=''>Role</option>
                        <option className="bg-primary-950">Web developer</option>
                        <option className="bg-primary-950">UI/UX Designer</option>
                        <option className="bg-primary-950">Scrum master</option>
                    </select>
                </div>
                <div className="w-10/12 mx-auto my-1 flex justify-around items-center text-xl bg-primary-950 rounded-lg py-1 px-2 text-primary-100">
                    <BiIdCard/>
                    <input  className="ml-1 w-full appearance-none outline-none bg-transparent" type="text" placeholder="Age" value={data.age} onChange={(e)=>{setFieldValue(JSON.parse(e.target.value),'age',validateAge)}}/>
                </div>
                <div className="w-10/12 mx-auto my-1 flex justify-around items-center text-xl bg-primary-950 rounded-lg py-1 px-2 text-primary-100">
                    <BiBriefcaseAlt2/>
                    <select className="ml-1 w-full appearance-none outline-none bg-transparent text-center" onChange={(e)=>{setFieldValue(JSON.parse(e.target.value),'status')}}>
                        <option className="bg-primary-950" disabled selected value=''>Status</option>
                        <option className="bg-primary-950" value={true}>Active</option>
                        <option className="bg-primary-950" value={false}>Inactive</option>
                    </select>
                </div>
                <div className="w-10/12 mx-auto my-1 flex justify-around items-center text-xl bg-primary-950 rounded-lg py-1 px-2 text-primary-100">
                    <BiMoneyWithdraw/>
                    <input value={data.salary} className="ml-1 w-full appearance-none outline-none bg-transparent" type="text" placeholder="Salary" onChange={(e)=>{setFieldValue(JSON.parse(e.target.value),'salary',validateSalary)}}/>
                </div>
            </div>
            <AnimatePresence>
            {notifications.map((n) => (
                <Notification removeNotif={removeNotif} {...n} key={n.id} />
                ))}
            </AnimatePresence>
        </div>
  )
}

export default Form