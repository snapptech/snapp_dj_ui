// import AuthLayout from "@/lib/auth/AuthLayout";
import Button from "@/lib/components/Button";
import React from "react";

const handleClick = () => {
  console.log('Button clicked!');
};

const SignUp1 = () => {
  return <main className="pl-6 pr-6 relative bg-[url(/djsignup.jpg)] bg-cover  h-screen flex flex-col justify-end">
    <h1 className="pb-6 text-white font-sf-pro text-4xl font-bold leading-13">
      Its how DJ’s make side income
    </h1>
    <h3 className="pb-6  text-white font-sf-pro text-lg font-medium leading-7">
      Let your audience request tracks and tip you during your live sets.
    </h3>
    <section className="pb-6 ">
      <Button type="button" value="Create and Account" onClick={handleClick} color="primary" fullWidth />
      <div className=" pb-6 " ></div>
      <Button type="button" value="Continue with Google" onClick={handleClick} color="secondary" fullWidth />

    </section>

  </main>;
};

export default SignUp1;
