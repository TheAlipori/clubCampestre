import React, { useState } from "react";
// Icons
import { BeakerIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-screen h-[105px] z-10 bg-secondary fixed drop-shadowlog-lg p-3">
      <div className="px-2 flex justify-around items-center w-full h-full ">
        <div className="flex items center">
          <img src="./src/assets/Recurso 4.svg" className="w-20" alt="" />
          <h1 className="text-3xl font-body mr-4 sm:text-4xl text-stone-800 py-5  ">
            Club <br></br>Campestre
          </h1>
          <ul className="hidden md:flex py-9 px-20  ">
            <li className="font-body">Inicio</li>
            <li className="font-body">Nosotros</li>
            <li className="font-body">Areas de renta</li>
            <li className="font-body">Intercambio</li>
            <li className="font-body">Se socio</li>
            <li className="font-body">Galeria</li>
            <li className="font-body">Contacto</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="font-body text-2xl px-3">Registrate</button>
          <button className="text-secondary bg-primary font-body text-2xl px-3 py-1 hover:bg-[#212B23] transition-colors">
            Inicia Sesion
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-8" /> : <XMarkIcon className="w-8" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-secondary w-full px-8"}>
        <li className="border-b-2 border-primary w-full font-body">Inicio</li>
        <li className="border-b-2 border-primary w-full font-body">Nosotros</li>
        <li className="border-b-2 border-primary w-full font-body">
          Areas de renta
        </li>
        <li className="border-b-2 border-primary w-full font-body">
          Intercambio
        </li>
        <li className="border-b-2 border-primary w-full font-body">Se socio</li>
        <li className="border-b-2 border-primary w-full font-body">Galeria</li>
        <li className="border-b-2 border-primary w-full font-body">Contacto</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-primary px-8 py-3 mb-4">
            Registrate
          </button>
          <button className="px-8 py-2 bg-primary  text-secondary hover:bg-[#212B23] transition-colors">
            Inicia Sesion
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Header;
