import { useAuthContext } from "@/lib/auth/AuthContext";
import AuthLayout from "@/lib/auth/AuthLayout";
import { User, updateUser } from "@/lib/modals/user";
import classNames from "classnames";
import { updateCurrentUser } from "firebase/auth";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useCallback, useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type DetailsFormProps = {};

const Input = ({
  placeholder,
  error,
  register,
}: {
  placeholder: string;
  register: any;
  error?: { message?: string };
}) => {
  return (
    <>
      <input
        className={classNames("border rounded-md bg-input p-3 leading-none", {
          "border-red-500": error,
        })}
        placeholder={placeholder}
        {...register}
      />
      {error?.message && <span className="text-red-500">{error.message}</span>}
    </>
  );
};

export const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>();

  const { user: authUser } = useAuthContext();

  // TODO: update the actual user object
  const onSubmit = useCallback(
    (user: User) => {
      console.log({ authUser });
      if (!authUser) return;
      updateUser(authUser.uid, user);
    },
    [authUser]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col container gap-5 text-center px-8 h-full py-6"
    >
      <p className="text-3xl bold">Create an account to start earning!</p>

      <Input
        placeholder="Name"
        register={register("name", { required: "Name is required" })}
        error={errors.name}
      />
      <Input
        placeholder="Artist name"
        register={register("artistName", { required: "name is required" })}
        error={errors.artistName}
      />
      {/* <Controller
        name="phoneNumber"
        control={control}
        render={({ field: { name, onChange, value } }) => (
          <PhoneInput
            containerClass="text-left w-full"
            // inputClass={classNames("border rounded-md bg-input p-3 leading-none", {
            //   "border-red-500": errors.countryCode,
            // })}
            // defaultOptionLabel="Select Country"
            // name={name}
            value={value}
            onChange={onChange}
          />
        )}
      /> */}
      <Input
        placeholder="phoneNumber"
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
            classes={classNames("border rounded-md bg-input p-3 leading-none", {
              "border-red-500": errors.countryCode,
            })}
            defaultOptionLabel="Select Country"
            name={name}
            value={value}
            onChange={onChange}
          />
        )}
        control={control}
      />

      <Input
        placeholder="companyName"
        register={register("companyName", {
          required: "companyName is required",
        })}
        error={errors.companyName}
      />
      <Input
        placeholder="KvKNumber"
        register={register("KvKNumber", {
          required: "KvKNumber is required",
        })}
        error={errors.KvKNumber}
      />

      <p>
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
        className="bg-primary text-white bold text-xl p-4 w-full rounded-2xl mt-auto"
      />
    </form>
  );
};

function DetailsForm({}: DetailsFormProps) {
  return (
    <AuthLayout>
      <Form />
    </AuthLayout>
  );
}

export const getServerSideProps: GetServerSideProps<
  DetailsFormProps
> = async () => {
  return {
    props: {},
  };
};

export default DetailsForm;
