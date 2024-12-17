import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

const userDataContext=createContext()
export const useUserData=()=>useContext(userDataContext)

const UserDataProvider = ({children}) => {
    const[userData,setUserData]=useState([])
    const fetchUserData=async()=>{
      const userApi = await axios.get("https://dummyjson.com/users");
      const data = userApi.data.users;
      setUserData(data);
    }
    useEffect(()=>{
        fetchUserData()
    },[])
const contextValue={
  userData,fetchUserData
}

  return (
    <userDataContext.Provider value={contextValue}>{children}</userDataContext.Provider>
    // or I can pass it like this
    // <userDataContext.Provider value={{userData,fetchUserData}}>{children}</userDataContext.Provider>
  )
}

export default UserDataProvider
