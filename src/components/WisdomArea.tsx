import { SetStateAction, useEffect, useState } from "react";
import SubjectButton from "./SubjectButton";
import axios, { AxiosResponse } from "axios";
import { AiFillCopy, AiFillSound, AiOutlineTwitter } from "react-icons/ai";

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

  let wholeQuote = `${quote?.quote ?? ""} ${quote?.source ?? ""}, ${quote?.year ?? ""}`;
 


  return (
    <section className="h-[100vh]  ">
       
      <div className=" flex flex-col justify-center items-center py-auto">

      <h1
            className="text-2xl p-4 mx-auto"
          >
            Which Subject Triggers Your Curiosity?
          </h1>
        <div className="h-[55vh] w-[55vh] p-auto border-2 border-black border-dashed rounded-md flex flex-col justify-center items-center mx-10">
          <div className="p-2 "> 
          <div> 
          {typeof quote?.quote === "string" ? (<> 
            <i> {quote.quote}</i> <b>{ quote.source + ", " + quote.year + "."}</b></>
          ) : null}</div>
</div>
          <div className="flex justify-end"> 
            <div onClick={() => {navigator.clipboard.writeText(wholeQuote)}}><AiFillCopy size={30}/></div>
            <div onClick={()=>{}}><AiFillSound size={30}/> </div>
            <div><AiOutlineTwitter size={30}/> </div>
          </div>
          
        </div>
        <div>
          <ul className="flex flex-wrap justify-center p-4 gap-2">
            <div className="p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
              <SubjectButton
                onClick={() => {
                  fetchGodinAPI("culture");
                }}
                subject="Culture"
              />
            </div>

            <div className="p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
              <SubjectButton
                onClick={() => {
                  fetchGodinAPI("marketing");
                }}
                subject="Marketing"
              />
            </div>

            <div className="p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
              <SubjectButton
                onClick={() => {
                  fetchGodinAPI("work");
                }}
                subject="Work"
              />
            </div>

            <div className="p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
              <SubjectButton
                onClick={() => {
                  fetchGodinAPI("ideas");
                }}
                subject="Ideas"
              />
            </div>
            <div className="p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
              <SubjectButton
                onClick={() => {
                  fetchGodinAPI("life");
                }}
                subject="Life"
              />
            </div>
            <div className="p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
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
