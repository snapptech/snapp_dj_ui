import React from "react";
import { useRouter } from "next/navigation";
import signin from "@/lib/auth/signin";

function Page() {
  const router = useRouter();

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { result, error } = await signin();

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/dj");
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign up</h1>
        <form onSubmit={handleForm} className="form">
          <button type="submit">Login with Google</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
