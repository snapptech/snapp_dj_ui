import React, { PropsWithChildren } from "react";
import classNames from "classnames";

type IButton = {
  type: "button" | "submit" | "reset";
  value?: string;
  onClick: (event: any) => void;
  color: "primary" | "secondary" | "ternary";
  fullWidth?: boolean;
  className?: string;
};

const Button = ({
  type,
  value,
  onClick,
  color,
  fullWidth,
  className,
  children,
}: PropsWithChildren<IButton>) => {
  return (
    <button
      className={classNames(
        className,
        "text-base font-bold leading-relaxed tracking-tight rounded-lg p-2",
        {
          "bg-primary text-white": color === "primary",
          "bg-input border border-white": color === "secondary",
          "w-full": fullWidth,
        }
      )}
      type={type}
      onClick={onClick}
    >
      {value}
      {children}
    </button>
  );
};

export default Button;
