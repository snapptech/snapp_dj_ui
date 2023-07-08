import React from "react";

type IButton = {
  type: "button" | "submit" | "reset";
  value: string;
  onClick: () => void;
};

const Button = ({ type, value, onClick }: IButton) => {
  return (
    <button type={type} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
