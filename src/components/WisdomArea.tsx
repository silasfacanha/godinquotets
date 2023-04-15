import { SetStateAction, useEffect, useState } from "react";
import SubjectButton from "./SubjectButton";
import axios, { AxiosResponse } from "axios";
import ActionButton from "./ActionButton";

interface Data {
  quote: string;
  source: string;
  year: number;
  label: string;
}

const WisdomArea = () => {
  const [quote, setQuote] = useState<Data["quote"]>();
  const fetchGodinAPI = (theme: string) => {
    axios
      .get<Data>(`https://godinapi.onrender.com/${theme}Quote`)
      .then((response: AxiosResponse<Data>) => {
        setQuote(response.data.quote);
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

  return (
    <div>
      <div>
        <h1
          className="text-3xl
        "
        >
          {" "}
          Which Subject Triggers Your Curiosity?
        </h1>
        <div> </div>
        <div>
          <ul>
            <h1
              className="text-2xl
          "
            >
              {typeof quote === "string" ? quote : null}
            </h1>
            <SubjectButton
              onClick={() => {
                fetchGodinAPI("culture");
              }}
              subject="culture"
            />
            <SubjectButton
              onClick={() => {
                fetchGodinAPI("marketing");
              }}
              subject="marketing"
            />
            <SubjectButton
              onClick={() => {
                fetchGodinAPI("work");
              }}
              subject="work"
            />
            <SubjectButton
              onClick={() => {
                fetchGodinAPI("ideas");
              }}
              subject="ideas"
            />

            <SubjectButton
              onClick={() => {
                fetchGodinAPI("life");
              }}
              subject="life"
            />

            <SubjectButton
              onClick={() => {
                fetchGodinAPI("random");
              }}
              subject="random"
            />
          </ul>
          <ul>
            {" "}
            <ActionButton action="Copy" /> <ActionButton action="Speak" />{" "}
            <ActionButton action="Twitter" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WisdomArea;
