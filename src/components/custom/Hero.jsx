import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/src/Video/bgv.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-white mx-8">
        <h1 className="font-extrabold text-[50px] mb-6">
          <span className="text-[#f56551]">Welcome to AI Trip Master!</span>
          <br />
          Discover Your Next Adventure With AI!
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Your personal trip planner and travel curator, creating custom
          itineraries tailored to your interests and budget.
        </p>
        <Link to="/create-trip">
          <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-400">
            Get Started!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
