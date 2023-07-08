import React from "react";
import classNames from "classnames";

type IButton = {
  type: "button" | "submit" | "reset";
  value: string;
  onClick: () => void;
  color: 'primary' | 'secondary';
};

const Button = ({ type, value, onClick, color }: IButton) => {
  return (
    <button className={classNames(
      "font-inter text-base font-bold leading-relaxed tracking-tight rounded-lg px-4 py-4",
      {
        "bg-blue-500 text-white": color === "primary",
        "border border-white" : color === "secondary"
      }
      )} type={type} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
