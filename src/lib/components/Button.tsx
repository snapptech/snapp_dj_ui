import React from "react";
import classNames from "classnames";

type IButton = {
  type: "button" | "submit" | "reset";
  value: string;
  onClick: () => void;
  color: "primary" | "secondary";
  fullWidth?: boolean;
};

const Button = ({ type, value, onClick, color, fullWidth }: IButton) => {
  return (
    <button
      className={classNames(
        "font-inter text-base font-bold leading-relaxed tracking-tight rounded-lg px-4 py-4",
        {
          "bg-primary text-white": color === "primary",
          "border border-white": color === "secondary",
          "w-full": fullWidth,
        }
      )}
      type={type}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
