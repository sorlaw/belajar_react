import React, { useState } from "react";
import Navbar from "./components/Navbar";

const Message = () => {};
const App = () => {
  const [getNavbarVal, setNavbarVal] = useState("");

  const changeNavbarValue = () => {
    setNavbarVal("My Contact");
  };

  return (
    <div>
      <Navbar navValue={getNavbarVal} />
      <h1 className="text-3xl font-weight-900 text-center">Ini Homepage</h1>
      <button
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ml-4"
        onClick={() => changeNavbarValue()}
      >
        isi Navbar
      </button>
      <br />
    </div>
  );
};

export default App;
