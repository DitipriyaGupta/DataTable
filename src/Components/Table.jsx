import axios from "axios";
import React, { useEffect, useState } from "react";
import { useUserData } from "./Data";

const Table = () => {
  const [pages, setPages] = useState(1);
  const{userData}=useUserData()
  const selectPageHandler=(selectedPage)=>{
    
    if(selectedPage>=1 && selectedPage<=userData.length/10)
      setPages(selectedPage)
  }
  return (
    <div className="h-2/3 w-2/3 bg-white rounded-md p-4 overflow-scroll relative">
      <table className="w-full text-left">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Blood Group</th>
        </tr>
        {Object.keys(userData)
          .slice(pages * 10 - 10, pages * 10)
          .map((key) => (
            <tr className="border-b-2 border-slate-500">
              <td>{userData[key].firstName}</td>
              <td>{userData[key].email}</td>
              <td>{userData[key].age}</td>
              <td>{userData[key].bloodGroup}</td>
            </tr>
          ))}
      </table>
      {userData.length > 0 && (
        <div className="p-8 flex justify-end gap-2">
          <span onClick={()=>selectPageHandler(pages-1)} className="cursor-pointer hover:bg-slate-300 rounded-xl w-6 h-6 text-center" > prev </span>
          {[...Array(Math.ceil(userData.length / 10))].map((_, i) => (
            <span onClick={()=>selectPageHandler(i+1)} className="cursor-pointer hover:bg-slate-300 rounded-xl w-6 h-6 text-center">{i + 1}</span>
          ))}
          <button onClick={()=>selectPageHandler(pages+1)} className="cursor-pointer hover:bg-slate-300 rounded-xl w-6 h-6 text-center" disabled> next </button>
        </div>
      )}
    </div>
  );
};

export default Table;
