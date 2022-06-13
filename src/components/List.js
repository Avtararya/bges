import React, { useState } from "react";

const List = () => {
  const [data, setData] = useState(false);
  //   const handleClick = () => setData(!data);

  return (
    <div>
      <div className="flex border-b-[1px] border-gray-700 h-12 items-center space-x-5 pl-5 ">
        <div className="flex">
          <div
            className="h-5 w-5 rounded-full text-white bg-black flex justify-center z-10 
          outline outline-2 border-white items-center text-[10px]"
          >
            10
          </div>
          <div className="h-5 w-5 rounded-full -ml-3 bg-gray-900 outline outline-white z-0"></div>
          <div className="h-5 w-5 rounded-full -ml-3 bg-gray-700 outline outline-white"></div>
        </div>
        <div className="flex-1 pl-5">
          <div className="text-white text-[13px]  flex justify-start items-center">
            All employee
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center pr-6">
          <input
            type="checkbox"
            checked={data}
            onChange={() => setData(!data)}
          />
        </div>
      </div>
      <div className="flex border-b-[1px] border-gray-700 h-12 items-center space-x-5 pl-5 ">
        <div className="h-5 w-5 rounded-full  bg-cyan-600 outline outline-white"></div>
        <div className="text-white text-[13px]  flex justify-start items-center">
          Dr. Siegfried Tausend
        </div>
        <div className="flex-1 flex justify-end items-center pr-6">
          <input className="bg-black" type="checkbox" />
        </div>
      </div>
      <div className="text-white text-[13px] flex justify-start items-center p-4">
        All practitioners
        <div className="flex-1 flex justify-end items-center pr-2">
          <input
            className="bg-black"
            onChange={data}
            // onChange={() => setData(!data)}
            type="checkbox"
          />
        </div>
      </div>
      <div className="flex items-center space-x-5 pl-5 ">
        <div className="h-5 w-5 rounded-full  bg-cyan-600 outline outline-white"></div>
        <div className="text-white text-[13px]  flex justify-start items-center">
          Dr. Xavier III
        </div>
        <div className="flex-1 flex justify-end items-center pr-6">
          <input className="bg-black" type="checkbox" checked={data} />
        </div>
      </div>
      <div className="flex items-center space-x-5 pl-5 h-[70px]">
        <div className="h-5 w-5 rounded-full  bg-cyan-600 outline outline-white"></div>
        <div className="text-white text-[13px]  flex justify-start items-center">
          Dr. Don Health
        </div>
        <div className="flex-1 flex justify-end items-center pr-6">
          <input className="bg-black" type="checkbox" checked={data} />
        </div>
      </div>
      <div className="flex items-center space-x-5 pl-5 h-[25px]">
        <div className="h-5 w-5 rounded-full  bg-cyan-600 outline outline-white"></div>
        <div className="text-white text-[13px]  flex justify-start items-center">
          Dr. Siegfried Tausend
        </div>
        <div className="flex-1 flex justify-end items-center pr-6">
          <input className="bg-black" type="checkbox" checked={data} />
        </div>
      </div>
      <div className="flex border-b-[1px] border-gray-700 h-6 items-center space-x-5 pl-5 "></div>
      <div className="text-white text-[13px]  flex justify-start items-center p-4">
        All assistants
        <div className="flex-1 flex justify-end items-center pr-2">
          <input className="bg-black" type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default List;
