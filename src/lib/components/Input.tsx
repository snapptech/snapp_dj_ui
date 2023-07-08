import classNames from "classnames";

export const Input = ({
  placeholder,
  error,
  register,
  className,
}: {
  placeholder: string;
  className?: string;
  register: any;
  error?: { message?: string };
}) => {
  return (
    <>
      <input
        className={classNames(
          className,
          "border rounded-md bg-input p-3 leading-none w-full h-12",
          {
            "border-red-500": error,
          }
        )}
        placeholder={placeholder}
        {...register}
      />
      {error?.message && <span className="text-red-500">{error.message}</span>}
    </>
  );
};
