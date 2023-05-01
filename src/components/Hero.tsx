
import frontImage from "./../assets/frontImage.png";
import { HashLink as Link } from "react-router-hash-link";
const Hero = () => {
  return (
    <section className="100vh">
      <div className="flex justify-center py-8 "> <img className="block h-72" src={frontImage} /></div>
      <div className="flex flex-col items-center p-2">
        <h2 className="font-semibold"> A project to spread Seth Godin's wisdom.</h2>
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
