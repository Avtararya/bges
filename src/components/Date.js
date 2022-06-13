import React, { useState } from "react";
import Calender from "./calender";

const Date = () => {
  const [showDate, setShowDate] = useState(false);

  const up = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3"
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
      className="h-3 w-3"
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

  const Dateicon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
  return (
    <div>
      <div className="px-24  w-full cursor-pointer ">
        <h2 className="text-2xl font-bold py-4">Date picker</h2>
        <div className="w-[376px] h-[54px] border-b-2  items-center flex-1 flex px-	">
          <div>{Dateicon}</div>
          <div
            className="flex  flex-1 justify-start items-center h-full text-[13px] ml-1"
            onClick={() => setShowDate(!showDate)}
          >
            Pick Date
          </div>
          <div className="flex flex-col">
            {up} {down}
          </div>
        </div>
        {showDate && <Calender />}
      </div>
    </div>
  );
};

export default Date;
