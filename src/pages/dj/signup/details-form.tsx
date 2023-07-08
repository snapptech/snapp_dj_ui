import 'react-phone-input-2/lib/style.css';

import { useAuthContext } from '@/lib/auth/AuthContext';
import { AuthLayoutWrapper } from '@/lib/auth/AuthLayout';
import { Input } from '@/lib/components/Input';
import { updateUser, User } from '@/lib/modals/user';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import { Controller, useForm } from 'react-hook-form';

export const DetailsForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const { user: authUser } = useAuthContext();
  const { push } = useRouter();

  // TODO: update the actual user object
  const onSubmit = useCallback(
    async (user: User) => {
      if (!authUser) return;
      await updateUser(authUser.uid, user);
      push("/dj/signup/pictures");
    },
    [authUser, push]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col container gap-5 px-8 h-full py-6 text-center basis-full min-h-screen"
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

export default AuthLayoutWrapper(DetailsForm);
