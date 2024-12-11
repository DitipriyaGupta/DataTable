import axios from 'axios'
import React,{useEffect, useState } from 'react'

const Table = () => {
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
   <div className="h-2/3 w-2/3 bg-white rounded-md">
   
     <table className="w-full">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Blood Group</th>
      </tr>
     </table>
    </div>
  
  )
}

export default Table
