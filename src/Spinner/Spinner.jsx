import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[calc(100vh-68px)]">
        <p className="text-7xl font-thin">Palatable w</p>
        <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-[#910000]"></div>
        <p className="text-7xl font-thin">rld....</p>
      </div>
    </>
  );
};

export default Spinner;
