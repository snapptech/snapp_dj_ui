import { User } from "@/lib/modals/user";
import classNames from "classnames";
import { GetServerSideProps } from "next";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

type DetailsFormProps = {};

function DetailsForm({}: DetailsFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = useCallback(() => console.log("test"), []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col container gap-2"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <input
        className={classNames("border rounded-md bg-input p-3 leading-none", {
          "border-red-500": errors.name,
        })}
        placeholder="Artist name"
        {...register("name", { required: true })}
      />
      {errors.name && (
        <span className="text-red-500">{errors.name.message}</span>
      )}

      <input type="submit" />
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
