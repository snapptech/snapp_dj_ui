import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/lib/components/LoadingSpinner";
import { User } from "@/lib/modals/user";

import { Avatar } from "@/lib/components/Avatar";
import { getUser } from "@/lib/modals/user";
import Image from "next/image";
import { motion } from "framer-motion";


const RequestPage = () => {
  const {
    query: { dj_id },
  } = useRouter();

  const [dj, setDj] = useState<User>();

  useEffect(() => {
    (async () => {
      if (!dj_id || typeof dj_id !== "string") return;
      const { result, error } = await getUser(dj_id);
      setDj(result || undefined);
    })();
  }, [dj_id]);

  if (!dj)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <motion.main initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-5 py-2 min-h-screen flex flex-col justify-between">
      <div className="flex flex-row justify-center flex-1 items-center mt-16 mb-5">
        <Avatar image={dj?.photoUrl} onChange={() => { }} />
      </div>
      <div className="flex flex-row justify-start flex-1 items-center">
        <h1 className="text-4xl text-bold">
          Thanks for your
          <h1 className="text-6xl font-bold text-primary uppercase">Request</h1>
        </h1>
      </div>
      <div className="flex flex-row justify-center flex-1 items-center">
        <p className="text-lg text-bold">
          I will do my best to play your favorite tune.
        </p>
      </div>

      <div className="flex flex-row justify-center flex-1 items-center">
        <p className="text-lg text-bold">
          {dj?.artistName}{" "}
          <span className="text-base">( {dj?.countryCode} )</span>
        </p>
      </div>

      <div className="flex flex-row justify-center flex-1 items-center">
        <Image alt="Dj" width={84} height={30} src="/logo.svg" />
      </div>
    </motion.main>
  );
};

export default RequestPage;
