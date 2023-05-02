
import frontImage from "./../assets/frontImage.png";
import { HashLink as Link } from "react-router-hash-link";
const Hero = () => {
  return (
    <section className="h-[100vh] flex flex-col items-center justify-center">
      <div> <img className="block max-h-72" src={frontImage} /></div>
      <div className="flex flex-col items-center ">
        <div className="text-center">  
        <h2 className="font-semibold p-4 md:text-2xl"> A project to spread Seth Godin's wisdom.</h2>

        </div>
        <Link smooth to="#wisdom">
          
          <button className=" font-semibold p-4 border-solid border-2 rounded-lg bg-[#ff366a] hover:bg-[#ff366a] border-transparent">
            
            Get Wiser
          </button>
        </Link>
        <img className=" hidden" src={frontImage} />
      </div>
    </section>
  );
};

export default Hero;
