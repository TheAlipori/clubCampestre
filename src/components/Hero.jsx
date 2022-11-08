import React from "react";
import {} from "@heroicons/react/24/solid";

export const Hero = () => {
  return (
    <div className="w-full h-screen bg-secondary flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className=" font-body text-5xl md:text-7xl">Rodeate de gente</p>
          <h1 className=" font-body py-3 text-5xl md:text-7xl ">
            con la misma{" "}
          </h1>
          <h1 className=" font-body py-3 text-5xl md:text-7xl font-bold">
            mision que tu{" "}
          </h1>

          <button className=" font-body font-bold bg-primary text-secondary text-5xl p-3 my-5 hover:bg-[#212B23] sm:w-[60%]">
            Unete ahora
          </button>
        </div>
        <div>
          <img className="w-full" src="./src/assets/heroimagen.png" alt="/" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
