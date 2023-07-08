// import AuthLayout from "@/lib/auth/AuthLayout";
import Button from "@/lib/components/Button";
import React from "react";

const handleClick = () => {
  console.log('Button clicked!');
};

const SignUp1 = () => {
  return <main>
    <h1 className="text-white font-sf-pro text-4xl font-bold leading-13">
      Its how DJ’s make side income
    </h1>
    <h3 className="text-white font-sf-pro text-lg font-medium leading-7">
      Let your audience request tracks and tip you during your live sets.
    </h3>
    <Button type="button" value="Click Me" onClick={handleClick} color="primary" />
    <br></br>
    <Button type="button" value="Continue with Google" onClick={handleClick} color="secondary"/>

  </main>;
};

export default SignUp1;
