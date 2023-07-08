// import AuthLayout from "@/lib/auth/AuthLayout";
import signin from "@/lib/auth/signin";
import Button from "@/lib/components/Button";
import React from "react";
import { useRouter } from "next/navigation";

const handleClick = () => {
  console.log("Button clicked!");
};

const SignUp1 = () => {
  const router = useRouter();

  const handleSigninWithGoogle = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const { error } = await signin();

    if (error) {
      return console.log(error);
    }

    return router.push("/dj/profile");
  };

  return (
    <main className="pl-6 pr-6 relative bg-[url(/djsignup.jpg)] bg-cover  h-screen flex flex-col justify-end">
      <h1 className="pb-6 text-white font-sf-pro text-4xl font-bold leading-13">
        Its how DJ’s make side income
      </h1>
      <h3 className="pb-6  text-white font-sf-pro text-lg font-medium leading-7">
        Let your audience request tracks and tip you during your live sets.
      </h3>
      <section className="pb-6 ">
        <Button
          type="button"
          value="Create an Account"
          onClick={handleClick}
          color="primary"
          fullWidth
        />
        <div className=" pb-6 "></div>
        <Button
          type="button"
          value="Continue with Google"
          onClick={handleSigninWithGoogle}
          color="secondary"
          fullWidth
        />
      </section>
    </main>
  );
};

export default SignUp1;
