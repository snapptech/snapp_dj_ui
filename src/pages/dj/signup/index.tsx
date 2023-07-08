// import AuthLayout from "@/lib/auth/AuthLayout";
import Button from "@/lib/components/Button";
import React from "react";

const handleClick = () => {
  console.log('Button clicked!');
};

const SignUp1 = () => {
  return <div>
    <Button type="button" value="Click Me" onClick={handleClick} />
  </div>;
};

export default SignUp1;
