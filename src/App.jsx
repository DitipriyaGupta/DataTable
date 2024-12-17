import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table from "./Components/Table";
import Data from "./Components/Data";
import UserDataProvider from "./Components/Data";

function App() {
  return (
    <UserDataProvider>
      <div className="bg-black h-screen grid place-items-center">
        <Table />
      </div>
    </UserDataProvider>
  );
}

export default App;
