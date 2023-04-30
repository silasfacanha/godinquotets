import React from "react";
import frontImage from "./../assets/frontImage.png";
import { HashLink as Link } from "react-router-hash-link";
const Hero = () => {
  return (
    <section className="h-[100vh] flex  flex-col items-center justify-center ">
      <img className="block " src={frontImage} />
      <div className="flex flex-col items-center">
        <h2 className="p-4 font-semibold"> A project to spread Seth Godin's wisdom.</h2>
        <Link smooth to="#wisdom">
          
          <button className=" font-semibold p-4 border-solid border-2 rounded-lg bg-[#ff366a] hover:bg-[#ff366a] border-transparent">
            
            Get Wiser
          </button>
        </Link>
        <img className=" hidden h-[80vh] p-4" src={frontImage} />
      </div>
    </section>
  );
};

export default Hero;
