import React from "react";
import { FaPlay } from "react-icons/fa6";
import { SlInfo } from "react-icons/sl";

const VIdeoTitle = ({ title, overview }) => {
  return (
    <div>
      <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/3">{overview}</p>
        <div className="flex">
          <button className="flex text-center bg-white text-black p-4 px-12 text-lg  rounded-md hover:bg-opacity-80">
            <FaPlay />
            Play
          </button>
          <button className="flex bg-gray-400 text-white mx-2 p-4 px-12 text-lg bg-opacity-50 rounded-md hover:bg-opacity-80">
            <SlInfo /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VIdeoTitle;
