import "react-phone-input-2/lib/style.css";

import { useAuthContext } from "@/lib/auth/AuthContext";
import { AuthLayoutWrapper } from "@/lib/auth/AuthLayout";
import { Input } from "@/lib/components/Input";
import { getUser, updateUser, User } from "@/lib/modals/user";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { Controller, useForm } from "react-hook-form";

export const DetailsForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();
  const { user: authUser } = useAuthContext();
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      if (!authUser) return;
      const user = (await getUser(authUser.uid)).result;
      if (!user) return;
      reset(user);
    })();
  }, [authUser, reset]);

  const onSubmit = useCallback(
    async (user: User) => {
      if (!authUser) return;
      await updateUser(authUser.uid, user);
      push("/dj/onboarding/picture");
    },
    [authUser, push]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col container gap-5 px-8 h-full pt-11 pb-6 text-center basis-full min-h-screen"
    >
      <p className="text-3xl font-sf-pro font-bold mb-1">
        Create an account to start earning!
      </p>

      <Input
        placeholder="Full name"
        register={register("name", { required: "Name is required" })}
        error={errors.name}
      />
      <Input
        placeholder="Artist name"
        register={register("artistName", { required: "name is required" })}
        error={errors.artistName}
      />
      <Input
        placeholder="Phone number"
        register={register("phoneNumber", {
          required: "phoneNumber is required",
        })}
        error={errors.phoneNumber}
      />
      <div />
      <Controller
        name="countryCode"
        render={({ field: { name, onChange, value } }) => (
          <CountryDropdown
            classes={classNames(
              "border h-12 rounded-md bg-input p-3 leading-none",
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

      <Input
        placeholder="Company name"
        register={register("companyName", {
          required: "companyName is required",
        })}
        error={errors.companyName}
      />
      <Input
        placeholder="KvK Number"
        register={register("KvKNumber", {
          required: "KvKNumber is required",
        })}
        error={errors.KvKNumber}
      />

      <p className="font-sf-pro text-sm ">
        {"By continuing, you agree to our "}
        <Link href="/tos" className="text-primary">
          Terms of Service
        </Link>
        {" and confirm that have read "}
        <Link href="/privacy" className="text-primary">
          Privacy Policy
        </Link>
      </p>

      <input
        type="submit"
        value="Next"
        className="bg-primary text-white bold text-xl p-2 w-full rounded-2xl mt-auto"
      />
    </form>
  );
};

export default AuthLayoutWrapper(DetailsForm);
