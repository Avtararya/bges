import React from "react";
import List from "./List";

const DropMenu = () => {
  const mag = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  return (
    <div>
      <div className="w-[376px] h-[390px] flex flex-col bottom-2 rounded-2xl  justify-start bg-[#142A51]">
        <div className="flex items-center bg-[#1C3663] rounded-2xl">
          <div className="bg-transparen h-12 w-12 flex items-center text-cyan-100 pl-3">
            {mag}
          </div>
          <input
            className="flex text-[13px] bg-transparent w-full h-12 outline-none p-1 text-white"
            type="text"
            placeholder="Search employee..."
          />
        </div>
        <List />
      </div>
    </div>
  );
};

export default DropMenu;
