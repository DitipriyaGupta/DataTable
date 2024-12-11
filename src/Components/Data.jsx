import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

const dataProvider=createContext()
export const userData=()=>useContext()
const Data = () => {
    const[userData,setUserData]=useState([])
    const fetchUserData=async()=>{
        const userApi=await axios.get("https://dummyjson.com/users")
        const data=userApi.data
        console.log(data)
    }
    useEffect(()=>{
        fetchUserData()
    })

  return (
    <div>
      
    </div>
  )
}

export default Data
