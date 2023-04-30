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

  return (
    <section className="h-[100vh] flex justify-center ">
      <div className=" flex flex-col justify-center items-center py-auto">
        {quote ? (
          <div>
            <div className="h-[55vh] w-[55vh] p-auto border-2 border-black border-dashed rounded-md flex flex-col justify-center items-center mx-10">
              <div className="p-2">
                <i> {quote.quote}</i>{" "}
                <b>{quote.source + ", " + quote.year + "."}</b>
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
                <div onClick={() => setQuote(undefined)}>
                  <AiOutlineRollback size={30} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl p-4 mx-auto">
              Which Subject Triggers Your Curiosity?
            </h1>
            <ul className="flex flex-wrap  p-4 gap-2">
              <div className=" bg-[#ff366a] flex items-between justify-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
                <SubjectButton
                  onClick={() => {
                    fetchGodinAPI("culture");
                  }}
                  subject="Culture"
                />
              </div>

              <div className=" bg-[#ff366a] flex justify-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
                <SubjectButton
                  onClick={() => {
                    fetchGodinAPI("marketing");
                  }}
                  subject="Marketing"
                />
              </div>

              <div className="bg-[#ff366a] flex justify-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
                <SubjectButton
                  onClick={() => {
                    fetchGodinAPI("work");
                  }}
                  subject="Work"
                />
              </div>

              <div className="bg-[#ff366a] flex justify-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
                <SubjectButton
                  onClick={() => {
                    fetchGodinAPI("ideas");
                  }}
                  subject="Ideas"
                />
              </div>
              <div className="bg-[#ff366a] flex justify-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
                <SubjectButton
                  onClick={() => {
                    fetchGodinAPI("life");
                  }}
                  subject="Life"
                />
              </div>
              <div className=" bg-[#ff366a] flex justify-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent">
                <SubjectButton
                  onClick={() => {
                    fetchGodinAPI("random");
                  }}
                  subject="Random"
                />
              </div>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
export default WisdomArea;
