import "react-phone-input-2/lib/style.css";

import AuthLayout, { AuthLayoutWrapper } from "@/lib/auth/AuthLayout";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Button from "@/lib/components/Button";
import { useAuthContext } from "@/lib/auth/AuthContext";
import { getUser, updateUser, uploadImage } from "@/lib/modals/user";
import { Avatar } from "@/lib/components/Avatar";
import { getDownloadURL } from "firebase/storage";
import Link from "next/link";

type PictureFormProps = {};

function PictureForm({}: PictureFormProps) {
  const { push } = useRouter();

  const { user: authUser } = useAuthContext();
  const [error, setError] = useState<any>();
  const [image, setImage] = useState<string>();

  useEffect(() => {
    (async () => {
      if (!authUser) return;
      console.log((await getUser(authUser.uid)).result)
      setImage((await getUser(authUser.uid)).result?.photoUrl);
    })();
  }, [authUser]);

  const upload = useCallback(
    async (file: File) => {
      if (!authUser) return;
      const { result, error } = await uploadImage(authUser.uid, file);
      if (error || !result) {
        return setError(!result ? "no result!" : "" + error);
      }
      const photoUrl = await getDownloadURL(result.ref);
      await updateUser(authUser.uid, { photoUrl });
      setImage(photoUrl);
    },
    [authUser]
  );

  return (
    <div className="flex flex-col justify-center p-8 text-center min-h-screen">
      <p className=" text-2xl font-bold font-sf-pro mb-2 ">
        Add a profile picture so others can recognize you
      </p>
      <p className="font-medium ">You can always change this later.</p>
      <div className="flex flex-row justify-center flex-1 items-center">
        <Avatar image={image} onChange={upload} />
      </div>
      <Button
        onClick={() => push("/dj/profile")}
        color="primary"
        type="submit"
        value="Next"
      />
      <Link href="/dj/profile" className="mt-4">
        Skip
      </Link>
    </div>
  );
}

export default AuthLayoutWrapper(PictureForm);
