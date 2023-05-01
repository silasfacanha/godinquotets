import { SetStateAction, useEffect, useState } from "react";
import SubjectButton from "./SubjectButton";
import axios, { AxiosResponse } from "axios";
import {
  AiFillCopy,
  AiFillSound,
  AiOutlineTwitter,
  AiOutlineRollback,
} from "react-icons/ai";

interface Data {
  quote: string;
  source: string;
  year: number;
  label: string;
}

const WisdomArea = () => {
  const [quote, setQuote] = useState<Data>();
  const fetchGodinAPI = (theme: string) => {
    axios
      .get<Data>(`https://godinapi.onrender.com/${theme}Quote`)
      .then((response: AxiosResponse<Data>) => {
        setQuote(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
  const touchGodinAPI = (theme: string) => {
    axios
      .get<Data>(`https://godinapi.onrender.com/${theme}Quote`)
      .then((response: AxiosResponse<Data>) => {
        return;
      });
  };

  useEffect(() => touchGodinAPI("random"));

  let wholeQuote = `${quote?.quote ?? ""} ${quote?.source ?? ""}, ${
    quote?.year ?? ""
  }`;

  const [showQuote, setShowQuote]= useState(false);

  function rollBackQuote(){
    setShowQuote(false);
    setQuote(undefined);


  }

  
  

  return (
    <section className="h-[100vh]  my-10 relative ">
      
      <div className="flex flex-col justify-center items-center">
        
          <div className={ showQuote? "transition ease-out duration-1000 opacity-100 absolute top-40 ": "top-40 absolute  opacity-0"}>
            <div> 
            <div className="h-auto w-auto p-auto border-2 border-black border-dashed rounded-md mx-10">
              <div className="p-2">
                {quote?.quote? (<> 
                <i> {quote?.quote}</i>
                <b>{quote?.source + ", " + quote?.year + "."}</b></>):"" }
              </div>

              <div className="flex justify-end">
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(wholeQuote);
                  }}
                >
                  <AiFillCopy size={30} />
                </div>
                <div onClick={() => {}}>
                  <AiFillSound size={30} />{" "}
                </div>
                <div>
                  <AiOutlineTwitter size={30} />{" "}
                </div>
                <div onClick={() => rollBackQuote()}>
                  <AiOutlineRollback size={30} />
                </div>
              </div>
            </div>
            </div>
          </div>
        
          <div  className={
            showQuote? "opacity-0  transition-opactiy duration-1000 ease-out absolute left-[150%]  ": "  transition ease-out duration-1000 opacity-100 absolute top-20 "}>
            <h1 className="text-2xl p-4 mx-auto">
              Which Subject Triggers Your Curiosity?
            </h1>
            <ul className="flex flex-wrap  p-4 gap-2" onClick={()=> setShowQuote(true)}>
              <div className=" bg-[#ff366a] w-full text-center p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
                <SubjectButton
                  onClick={() => {
                    fetchGodinAPI("culture");
                  }}
                  subject="Culture"
                />
              </div>

              <div className=" bg-[#ff366a] text-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
                <SubjectButton
                  onClick={() => {
                    fetchGodinAPI("marketing");
                  }}
                  subject="Marketing"
                />
              </div>

              <div className="bg-[#ff366a] text-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
                <SubjectButton
                  onClick={() => {
                    fetchGodinAPI("work");
                  }}
                  subject="Work"
                />
              </div>

              <div className=" bg-[#ff366a] text-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
                <SubjectButton
                  onClick={() => {
                    fetchGodinAPI("ideas");
                  }}
                  subject="Ideas"
                />
              </div>
              <div className="bg-[#ff366a] text-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
                <SubjectButton
                  onClick={() => {
                    fetchGodinAPI("life");
                  }}
                  subject="Life"
                />
              </div>
              <div className=" bg-[#ff366a] text-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
                <SubjectButton
                  onClick={() => {
                    fetchGodinAPI("random");
                  }}
                  subject="Random"
                />
              </div>
            </ul>
          </div>
        
      </div>
    </section>
  );
};
export default WisdomArea;
