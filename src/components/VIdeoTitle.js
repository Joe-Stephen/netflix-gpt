import React from "react";

const VIdeoTitle = ({ title, overview }) => {
  return (
    <div>
      <div className="w-screen h-fit aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/3">{overview}</p>
        <div className="flex">
          <button className="bg-white text-black p-4 px-12 text-lg  rounded-md">
          ▷ Play
          </button>
          <button className="bg-gray-400 text-white mx-2 p-4 px-12 text-lg bg-opacity-50 rounded-md">
          ❕More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VIdeoTitle;
