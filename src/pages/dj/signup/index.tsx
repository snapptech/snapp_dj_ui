// import AuthLayout from "@/lib/auth/AuthLayout";
import React from "react";
import Button from '../../Button'

const handleClick = () => {
  console.log('Button clicked!');
};

const SignUp1 = () => {
  return <div>
    <Button type="button" value="Click Me" onClick={handleClick} />
  </div>;
};

export default SignUp1;
