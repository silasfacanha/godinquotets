import React from "react";

interface SubjectProps {
  subject: string;
  onClick: () => void;
}

const SubjectButton = (props: SubjectProps) => {
  return <div onClick={props.onClick}>{props.subject}</div>;
};

export default SubjectButton;
