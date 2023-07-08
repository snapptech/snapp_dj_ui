import { User } from "@/lib/modals/user";
import classNames from "classnames";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

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

function DetailsForm({}: DetailsFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>();

  // TODO: update the actual user object
  const onSubmit = useCallback((user: User) => console.log({ user }), []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col container gap-5 text-center"
    >
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
      <Input
        placeholder="phoneNumber"
        register={register("phoneNumber", {
          required: "phoneNumber is required",
        })}
        error={errors.phoneNumber}
      />
      <div />
      <Input
        placeholder="countryCode"
        register={register("countryCode", {
          required: "countryCode is required",
        })}
        error={errors.countryCode}
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
        register={register("KvKNumber", { required: "KvKNumber is required" })}
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
        className="bg-primary text-white bold text-xl p-4 w-full rounded-2xl"
      />
    </form>
  );

  return <div className="container p-8 gap-2 flex flex-col"></div>;
}

export const getServerSideProps: GetServerSideProps<
  DetailsFormProps
> = async () => {
  return {
    props: {},
  };
};

export default DetailsForm;
