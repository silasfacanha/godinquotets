import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { NavHashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="h-[10%] flex justify-between">
      <div>
      <Link smooth  to="#home"><h1 className="p-4 text-2xl font-bold "> Godin Quote </h1></Link>

      </div>

      {!toggle ? (
        <div onClick={handleToggle} className="p-4 sm:hidden">
          <TiThMenuOutline size={30} color="#ff366a"/>
        </div>
      ) : (
        <div className="p-4 sm:hidden text-[#ff366a]">
              
        <AiOutlineClose size={20} onClick={handleToggle} />{" "}
      </div>
      )}

<div
        className={
          toggle
            ? "fixed left-0 top-0 h-full w-full text-3xl bg-[#ffff] ease-in-out duration-500"
            : "fixed text-3xl top-0 h-full ease-in-out duration-500 left-[-100%]"
        }
      >
        <ul >
          <li className="p-4 border-b-2 flex  items-center border-[#ff366a] ">
            <Link to="#home" smooth>
              <div onClick={handleToggle}>Home</div>
            </Link>
            <div className="text-[#ff366a] ml-[70%] ">
              
              <AiOutlineClose size={20} onClick={handleToggle} />{" "}
            </div>
          </li>
          <li className="p-4 border-b-2 border-[#ff366a]">
            <Link to="#wisdom" smooth>
              <div onClick={handleToggle}> Wisdom Area </div>
            </Link>
          </li>
          <li className="p-4 border-b-2 border-[#ff366a]">
            <Link to="#godin" smooth>
              <div onClick={handleToggle}> Godin Who?</div>
            </Link>
          </li>
          <li className="p-4 border-b-2 border-[#ff366a]">
            <Link to="#dev" smooth>
              <div onClick={handleToggle}> The Dev</div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden sm:block">
        <ul className="flex   justify-between font-semibold">
        
          <Link smooth  to="#home"> <li className="p-4">Home</li></Link>
          <Link smooth to="#wisdom"> <li className="p-4">Wisdom Area</li></Link>
          <Link smooth to= "#godin"><li className="p-4">Godin Who?</li></Link>
          <Link smooth to="#dev"><li className="p-4">The Dev</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
