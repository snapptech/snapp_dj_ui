import { Avatar } from "@/lib/components/Avatar";
import { IconTabs } from "@/lib/components/IconTabs";
import { Input } from "@/lib/components/Input";
import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { User, getUser, updateUser } from "@/lib/modals/user";
import { useAuthContext } from "@/lib/auth/AuthContext";
import { AuthLayoutWrapper } from "@/lib/auth/AuthLayout";
import { CountryDropdown } from "react-country-region-selector";
import classNames from "classnames";
import { onAuthStateChanged, getAuth, User as AuthUser } from "firebase/auth";
import { RequestData, getRequests } from "@/lib/modals/requests";
import { DjHeader } from "@/lib/components/DjHeader";
import { LoadingSpinner } from "@/lib/components/LoadingSpinner";

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

type ProfileFormProps = {
  authUser: AuthUser | null;
  setUserProfile: (user: User | null) => void;
};

const ProfileForm: FC<ProfileFormProps> = ({ setUserProfile, authUser }) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
    control,
  } = useForm<User>();

  useEffect(() => {
    async function updateUserSettings() {
      console.log("authuser", authUser);
      if (!authUser) return;
      const user = await getUser(authUser.uid);
      setUserProfile(user.result);
      const userData = user.result;

      if (user.error || !userData) return;

      setValue("name", userData.name);
      setValue("email", authUser.email ?? "");
      setValue("countryCode", userData.countryCode);
    }

    updateUserSettings();
  }, [authUser, setUserProfile, setValue]);

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
  }, [authUser, watch]);

  return (
    <form>
      <div className="flex flex-col justify-between gap-5 pt-3">
        <Input register={register("name")} placeholder="DJ Nifty" />
        <Input
          register={register("email", { disabled: true })}
          placeholder="somebody@email.com"
        />
        {/* <Input register={register("countryCode")} placeholder="Netherlands" /> */}
        <Controller
          name="countryCode"
          render={({ field: { name, onChange, value } }) => (
            <CountryDropdown
              classes={classNames(
                "border rounded-md h-12 bg-input p-3 leading-none",
                {
                  "border-red-500": errors.countryCode,
                }
              )}
              defaultOptionLabel="Select Country"
              name={name}
              value={value}
              valueType="short"
              onChange={onChange}
            />
          )}
          control={control}
        />
      </div>
    </form>
  );
};

const Profile = () => {
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const { user: authUser } = useAuthContext();
  const [completedRequests, setCompletedRequests] = useState<RequestData[]>([]);
  const [amountEarned, setAmountEarned] = useState(0);

  const loadAllRequests = useCallback(async () => {
    if (!authUser) return;
    const { result, error } = await getRequests(authUser.uid);
    if (error || !result) return console.error(error);

    const completedRequestsData = result.filter(
      (request) => request.status === "done"
    );
    setCompletedRequests(completedRequestsData);
    const calculatedAmountEarned = completedRequestsData.reduce(
      (acc, cur) => acc + cur.amount,
      0
    );
    setAmountEarned(calculatedAmountEarned);
  }, [authUser]);

  useEffect(() => {
    loadAllRequests();
  }, [loadAllRequests]);

  return (
    <div className="px-8 py-2 min-h-screen flex flex-col justify-between">
      <div>
        <div className="flex justify-end absolute top-4 right-4">
          <Link href="/dj/settings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47 49"
              fill="none"
              className="w-8 m-2"
            >
              <path
                stroke="currentColor"
                strokeWidth="3.438"
                d="M23.213 31.25a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5Z"
              />
              <path
                stroke="currentColor"
                strokeWidth="3.438"
                d="M27.185 2.342C26.359 2 25.31 2 23.213 2s-3.145 0-3.97.342a4.5 4.5 0 0 0-2.438 2.437c-.207.502-.29 1.089-.321 1.942a3.638 3.638 0 0 1-1.778 3.044 3.64 3.64 0 0 1-3.526.018c-.756-.4-1.302-.621-1.845-.693a4.5 4.5 0 0 0-3.325.89c-.707.547-1.233 1.454-2.282 3.27-1.048 1.816-1.575 2.723-1.69 3.611a4.5 4.5 0 0 0 .892 3.328c.333.432.798.794 1.52 1.249C5.516 22.106 6.2 23.244 6.2 24.5c0 1.256-.684 2.394-1.748 3.06-.723.457-1.19.819-1.521 1.251a4.5 4.5 0 0 0-.891 3.328c.117.886.64 1.795 1.687 3.611 1.05 1.816 1.575 2.722 2.284 3.27a4.5 4.5 0 0 0 3.328.89c.54-.072 1.086-.292 1.842-.693a3.639 3.639 0 0 1 3.526.018c1.087.63 1.733 1.789 1.778 3.044.031.855.112 1.44.321 1.942a4.5 4.5 0 0 0 2.437 2.437c.826.342 1.874.342 3.971.342s3.146 0 3.972-.342a4.501 4.501 0 0 0 2.436-2.437c.207-.502.29-1.086.322-1.941.045-1.256.69-2.417 1.778-3.045a3.64 3.64 0 0 1 3.525-.018c.756.4 1.303.621 1.843.693a4.5 4.5 0 0 0 3.328-.89c.709-.545 1.233-1.454 2.281-3.27 1.049-1.816 1.575-2.722 1.69-3.611a4.5 4.5 0 0 0-.89-3.328c-.334-.432-.8-.794-1.522-1.249a3.639 3.639 0 0 1-1.748-3.062c0-1.256.684-2.394 1.748-3.06.722-.457 1.19-.819 1.521-1.251a4.5 4.5 0 0 0 .891-3.328c-.117-.886-.641-1.795-1.687-3.611-1.051-1.816-1.575-2.723-2.284-3.27a4.5 4.5 0 0 0-3.328-.89c-.54.072-1.087.292-1.845.693a3.64 3.64 0 0 1-3.523-.018 3.638 3.638 0 0 1-1.778-3.045c-.031-.854-.112-1.44-.322-1.941a4.5 4.5 0 0 0-2.436-2.437Z"
              />
            </svg>
          </Link>
        </div>
        {userProfile ? <DjHeader {...userProfile} /> : <LoadingSpinner className="w-full justify-center items-center" />}
        <div className="py-3">
          <Info
            leftTitle="Request(s)"
            leftValue={completedRequests.length}
            rightTitle="Earnings"
            rightValue={`€ ${(amountEarned / 100)
              .toFixed(2)
              .replace(".", ",")}`}
          />
        </div>
        <ProfileForm setUserProfile={setUserProfile} authUser={authUser} />
        <p className="pt-3">
          Print QR-code:
          <Link href="/dj/code" className="ml-1 text-bold underline">
            click here
          </Link>
        </p>
        <p className="pt-3">
          Your music library:
          <Link href="/dj/library" className="ml-1 text-bold underline">
            click here
          </Link>
        </p>
      </div>
      <IconTabs selectedTab="profile" />
    </div>
  );
};

export default AuthLayoutWrapper(Profile);
