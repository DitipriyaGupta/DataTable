import axios from "axios";
import React, { useEffect, useState } from "react";
import { useUserData } from "./Data";

const Table = () => {
  const [pages, setPages] = useState(1);
  const [toggle, setToggle] = useState({
    firstName: true,
    email: true,
    age: true,
    bloodGroup: true,
  });
  const { userData } = useUserData();
  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= userData.length / 10)
      setPages(selectedPage);
  };
  // const sorting = () => {
  //   Object.keys(userData).sort((a, b) =>
  //     userData[a].firstName.localeCompare(userData[b].firstName)
  // )
  // console.log(userData[a.firstName])
  // };
  const handleToggle = (column) => {
    setToggle((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  return (
    <div className="h-2/3 w-2/3 bg-white rounded-md p-4 overflow-scroll relative">
     
      <input
        type="checkbox"
        checked={!toggle.firstName}
        onChange={() => handleToggle("firstName")}
      />
      FirstName
      <input
        type="checkbox"
        checked={!toggle.email}
        onChange={() => handleToggle("email")}
      />
      email
      <input
        type="checkbox"
        checked={!toggle.age}
        onChange={() => handleToggle("age")}
      />
      Age
      <input
        type="checkbox"
        checked={!toggle.bloodGroup}
        onChange={() => handleToggle("bloodGroup")}
      />
      bloodGroup
      
      <input type="search" className=" ml-4 border border-black"/>
      <button>Search</button>
    
      <table className="w-full text-left">
        <tr>
          {toggle.firstName && <th>Name</th>}
          {toggle.email && <th>Email</th>}
          {toggle.age && <th>Age</th>}
          {toggle.bloodGroup && <th>Blood Group</th>}
        </tr>
        {Object.keys(userData)
          .slice(pages * 10 - 10, pages * 10)
          .map((key) => (
            <tr className="border-b-2 border-slate-500">
              {toggle.firstName && <td>{userData[key].firstName}</td>}
              {toggle.email && <td>{userData[key].email}</td>}
              {toggle.age && <td>{userData[key].age}</td>}
              {toggle.bloodGroup && <td>{userData[key].bloodGroup}</td>}
            </tr>
          ))}
      </table>
      {userData.length > 0 && (
        <div className="p-8 flex justify-end gap-2">
          <span
            onClick={() => selectPageHandler(pages - 1)}
            className="cursor-pointer hover:bg-slate-300 rounded-xl w-6 h-6 text-center"
          >
            {" "}
            prev{" "}
          </span>
          {[...Array(Math.ceil(userData.length / 10))].map((_, i) => (
            <span
              onClick={() => selectPageHandler(i + 1)}
              className="cursor-pointer hover:bg-slate-300 rounded-xl w-6 h-6 text-center"
            >
              {i + 1}
            </span>
          ))}
          <button
            onClick={() => selectPageHandler(pages + 1)}
            className="cursor-pointer hover:bg-slate-300 rounded-xl w-6 h-6 text-center"
          >
            {" "}
            next{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
