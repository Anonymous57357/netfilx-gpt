import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screeen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold font-sans text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="px-12 p-3.5  bg-white hover:opacity-60 text-black hover: rounded-xl text-lg font-medium font-sans mr-6 ">
         Play
        </button>
        <button className="px-12 p-3.5 bg-white hover:opacity-60 text-black rounded-lg text-xl font-medium font-sans">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
