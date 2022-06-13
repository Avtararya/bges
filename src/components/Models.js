import React, { useState } from "react";
import DropMenu from "./Drop-menu";

const Models = () => {
  const [showMenu, setShowMenu] = useState(false);
  const up = (
    <svg
      onClick={() => setShowMenu(false)}
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  const down = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setShowMenu(true)}
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  console.log(showMenu);

  return (
    <>
      <div className="px-10  w-full cursor-pointer">
        {/* <Date /> */}

        <h2 className="text-2xl font-bold py-4">Select employee dropdown</h2>

        <div
          className="w-[376px] h-[54px] border bg-[#F0F5FB] rounded-2xl items-center flex-1 flex px-6	"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="flex justify-start">
            <div
              className="h-8 w-8 rounded-full text-white bg-black flex justify-center z-10 
          outline outline-2 border-white items-center"
            >
              12
            </div>
            <div className="h-8 w-8 rounded-full -ml-4 bg-gray-900 outline outline-white z-0"></div>
            <div className="h-8 w-8 rounded-full -ml-4 bg-gray-700 outline outline-white"></div>
          </div>

          <div className="flex  flex-1 justify-start items-center h-full text-[13px] ml-1">
            Select employee
          </div>

          <div className="flex  justify-end items-center h-full">
            <div>{showMenu ? <div>{up}</div> : <div>{down}</div>}</div>
          </div>
        </div>
        {showMenu && <DropMenu />}
      </div>
    </>
  );
};

export default Models;
