import { Avatar } from "@/lib/components/Avatar";
import { IconTabs } from "@/lib/components/IconTabs";
import { Input } from "@/lib/components/Input";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { User, getUser, updateUser } from "@/lib/modals/user";
import { useAuthContext } from "@/lib/auth/AuthContext";
import { AuthLayoutWrapper } from "@/lib/auth/AuthLayout";

const Info = ({ leftTitle, leftValue, rightTitle, rightValue }: any) => (
  <div className="flex justify-between">
    <div>
      <p className="text-sm">{leftTitle}</p>
      <p className="text-xl font-bold">{leftValue}</p>
    </div>
    <div className="text-right">
      <p className="text-sm">{rightTitle}</p>
      <p className="text-xl font-bold">{rightValue}</p>
    </div>
  </div>
);

let updateUserTimeout: ReturnType<typeof setTimeout>;

const ProfileForm = () => {
  const { register, setValue, watch } = useForm<User>();
  const { user: authUser } = useAuthContext();

  useEffect(() => {
    async function updateUserSettings() {
      if (!authUser) return;
      const user = await getUser(authUser.uid);
      const userData = user.result;

      if (user.error || !userData) return;

      setValue("name", userData.name);
      setValue("email", authUser.email ?? "");
      setValue("countryCode", userData.countryCode);
    }

    updateUserSettings();
  }, [authUser, setValue]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (!authUser || !name) return;
      if (updateUserTimeout) {
        clearTimeout(updateUserTimeout);
      }
      updateUserTimeout = setTimeout(() => {
        console.log("updating user", name, value);
        updateUser(authUser.uid, { [name]: value[name] });
      }, 500);
    });

    return () => {
      subscription.unsubscribe();
      if (updateUserTimeout) {
        clearTimeout(updateUserTimeout);
      }
    };
  }, [watch]);

  return (
    <form>
      <div className="flex flex-col justify-between gap-3 pt-3">
        <Input register={register("name")} placeholder="DJ Nifty" />
        <Input
          register={register("email", { disabled: true })}
          placeholder="somebody@email.com"
        />
        <Input register={register("countryCode")} placeholder="Netherlands" />
      </div>
    </form>
  );
};

const Profile = () => {
  return (
    <div className="px-5 py-2 min-h-screen flex flex-col justify-between">
      <div>
        <div className="text-center">
          <p>Profile</p>
          <div className="flex justify-center py-3">
            <Avatar image="/images/profile_pic.png" />
          </div>
          <p className="text-lg text-bold">
            DJ Nifty <span className="text-base">( NL )</span>
          </p>
        </div>
        <div className="py-3">
          <Info
            leftTitle="Request(s)"
            leftValue="11"
            rightTitle="Earnings"
            rightValue="€ 240"
          />
        </div>
        <ProfileForm />
        <p className="text-bold pt-3">
          Print QR-code:
          <Link href="/dj/code" className="underline">
            click here
          </Link>
        </p>
        <p className="text-bold pt-3">
          Your music library:
          <Link href="/dj/code" className="underline">
            click here
          </Link>
        </p>
      </div>
      <IconTabs selectedTab="profile" />
    </div>
  );
};

export default AuthLayoutWrapper(Profile);
