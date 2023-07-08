import classNames from "classnames";

export const Input = ({
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
