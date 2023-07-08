// import AuthLayout from "@/lib/auth/AuthLayout";
import signin from "@/lib/auth/signin";
import Button from "@/lib/components/Button";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const handleClick = () => {
  console.log("Button clicked!");
};

const SignUp1 = () => {
  const router = useRouter();

  const handleSigninWithGoogle = async (
    event: Pick<React.FormEvent<HTMLFormElement>, 'preventDefault'>
  ) => {
    event.preventDefault();

    const { error } = await signin();

    if (error) {
      return console.log(error);
    }

    return router.push("/dj/onboarding/details-form");
  };

  return (
    <main className="px-6 pb-6 relative bg-[#0A060E] bg-cover h-screen flex flex-col justify-end">
      <div className="h-3/4 relative -mx-6 flex flex-row justify-center">
        <Image
          alt="Dj"
          layout="fill"
          src="/djsignup.png"
          objectFit="cover"
          objectPosition="bottom center"
          className="z-0"
        />
        <div className="mt-24 z-1 relative">
          <Image alt="Dj" width={165} height={59} src="/logo.svg" />
        </div>
      </div>
      <h3 className="z-1 relative pb-6 text-white font-sf-pro text-2xl font-bold leading-7 -mt-12">
        Artists
      </h3>
      <Button
        type="button"
        onClick={handleSigninWithGoogle}
        color="secondary"
        fullWidth
        className="z-1 relative flex flex-row justify-centers items-center"
      >
        <Image
          alt="Google"
          width={33}
          height={33}
          src="/google-logo.svg"
          className="mr-2"
        />
        Continue with Google
      </Button>
      <p className=" text-center mt-3 ">
        {"Don’t have an account? "}
        <button className=" text-primary " onClick={handleSigninWithGoogle}>
          Sign up
        </button>
      </p>
      <div className="flex flex-1" />
    </main>
  );
};

export default SignUp1;
