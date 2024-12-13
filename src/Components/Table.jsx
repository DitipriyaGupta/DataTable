import axios from "axios";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [userData, setUserData] = useState({});
  const [pages, setPages] = useState(1);
  const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(Array(data1.length / 10));
  const fetchUserData = async () => {
    const userApi = await axios.get("https://dummyjson.com/users");
    const data = userApi.data.users;
    setUserData(data);
    console.log(userData.length);
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="h-2/3 w-2/3 bg-white rounded-md p-4 overflow-scroll">
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
        <>
          {[...Array(Math.ceil(userData.length / 10))].map((_, i) => (
            <span>{i + 1}</span>
          ))}
        </>
      )}
    </div>
  );
};

export default Table;
