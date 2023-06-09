import { useEffect, useState } from "react";
import SubjectButton from "./SubjectButton";
import axios, { AxiosResponse } from "axios";
import {
  AiFillCopy,
  AiFillSound,
  AiOutlineTwitter,
 
} from "react-icons/ai";
import {FaRedo} from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  useEffect(() => touchGodinAPI("random"), []);

  let wholeQuote = `${quote?.quote ?? ""} ${quote?.source ?? ""}, ${
    quote?.year ?? ""
  }`;

  const [showQuote, setShowQuote] = useState(false);

  const msg = new SpeechSynthesisUtterance();
  const voices = speechSynthesis.getVoices();
  const englishVoices = voices.filter(voice=>voice.lang=="en-US");
  msg.voice= englishVoices[0];
  console.log(englishVoices);
  msg.text = wholeQuote;
  const notify = (toastText:string) => toast(toastText);
 
  
  function rollBackQuote() {
    setShowQuote(false);
    setQuote(undefined);
    window.speechSynthesis.cancel();
  }

  return (
    <section className="h-[100vh]  my-10 relative flex flex-col items-center  ">
      <div className="flex flex-col justify-center items-center">
        <div
          className={
            showQuote
              ? "transition ease-out duration-1000 opacity-100 absolute w-[90%] sm: top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
              : "scale-0 absolute opacity-0"
          }
        >
          <div>
            <div className=" border-2 border-black border-dashed rounded-md  text-center">
              <div className="p-2">
                {quote?.quote ? (
                  <>
                    <i> {quote?.quote}</i>
                    <b>{quote?.source + ", " + quote?.year + "."}</b>
                  </>
                ) : (
                 <div><p> <b>Sorry</b>, we were not able to retrieve your quote from our API. Give it another try!</p></div>
                )}
              </div>

              <div className="flex justify-end items-center cursor-pointer">
              <div onClick={() => rollBackQuote()}>
                  <FaRedo size={25} color="#ff366a" />
                </div>
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(wholeQuote);
                    notify("You've just copied a great quote!")
                  }}
                >
                  <AiFillCopy size={30} />
                </div>
                <div
                  onClick={() => { 
                    window.speechSynthesis.cancel();
                    window.speechSynthesis.speak(msg);
                    notify("Turn up the volume to hear some wisdom!")
                  }}
                >
                  <AiFillSound size={30} />{" "}
                </div>
                <a 
          href={`https://twitter.com/intent/tweet?text=${quote?.quote} ${quote?.source}, ${quote?.year}`}
          target="blank"
          rel="noopener noreferrer">
                  <AiOutlineTwitter size={30} />{" "}
                </a>
               
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            showQuote
              ? "opacity-0  transition-opactiy duration-1000 ease-out absolute scale-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  "
              : "  transition ease-out duration-1000 opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          }
        >
          <h1 className="text-2xl p-4 mx-auto">
            Which Subject Triggers Your Curiosity?
          </h1>
          <ul
            className="flex flex-wrap  p-4 gap-2"
            
          >
            <div onClick={() => setShowQuote(true)} className=" bg-[#ff366a] w-full text-center p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent  cursor-pointer">
              <SubjectButton
                onClick={() => {
                  fetchGodinAPI("culture");
                }}
                subject="Culture"
              />
            </div>

            <div onClick={() => setShowQuote(true)} className=" bg-[#ff366a] text-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent  cursor-pointer">
              <SubjectButton
                onClick={() => {
                  fetchGodinAPI("marketing");
                }}
                subject="Marketing"
              />
            </div>

            <div onClick={() => setShowQuote(true)} className="bg-[#ff366a] text-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent cursor-pointer">
              <SubjectButton
                onClick={() => {
                  fetchGodinAPI("work");
                }}
                subject="Work"
              />
            </div>

            <div onClick={() => setShowQuote(true)} className=" bg-[#ff366a] text-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent cursor-pointer">
              <SubjectButton
                onClick={() => {
                  fetchGodinAPI("ideas");
                }}
                subject="Ideas"
              />
            </div>
            <div onClick={() => setShowQuote(true)} className="bg-[#ff366a] text-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent cursor-pointer">
              <SubjectButton
                onClick={() => {
                  fetchGodinAPI("life");
                }}
                subject="Life"
              />
            </div>
            <div onClick={() => setShowQuote(true)} className=" bg-[#ff366a] text-center w-full p-1 border-2 border-solid border-black rounded-md hover:bg-[#ff366a] border-transparent cursor-pointer">
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
      <ToastContainer/>
    </section>
  );
};
export default WisdomArea;
