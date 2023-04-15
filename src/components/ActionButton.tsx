import React from "react";
interface ActionButtonProps {
  action: string;
}
const ActionButton = (props: ActionButtonProps) => {
  return (
    <div>
      <h1> {props.action}</h1>
    </div>
  );
};

export default ActionButton;
