import { useAuthContext } from "@/lib/auth/AuthContext";
import { AuthLayoutWrapper } from "@/lib/auth/AuthLayout";
import { IconTabs } from "@/lib/components/IconTabs";
import { Input } from "@/lib/components/Input";
import { User, getUser } from "@/lib/modals/user";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Settings = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm<User>();

  const { user: authUser } = useAuthContext();

  useEffect(() => {
    async function updateUserSettings() {
      if (!authUser) return;
      const user = await getUser(authUser.uid);
      const userData = user.result;

      if (user.error || !userData) return;

      setValue("name", userData.name);
      setValue("phoneNumber", userData.phoneNumber);
      setValue("artistName", userData.artistName);
      setValue("businessNumber", userData.businessNumber);
      setValue("bankAccName", userData.bankAccName);
      setValue("bankAccNumber", userData.bankAccNumber);
    }

    updateUserSettings();
  }, [authUser, setValue]);

  return (
    <div className="flex flex-col container gap-5 text-center px-10 h-full py-6">
      <h1 className="text-lg">Settings</h1>

      <div className="py-8">
        <p className="text-md">Pay out</p>
        <p className="text-3xl font-bold">€ 1200</p>
      </div>

      <p className="text-xl mb-2">
        This account is not authorized to change details. Please contact support
        team for further assistance.
      </p>

      <form className="space-y-5">
        <Input
          placeholder="Full Name"
          register={register("name", {
            required: "Full name is required",
            disabled: true,
          })}
          error={errors.name}
        />
        <Input
          placeholder="Phone number"
          register={register("phoneNumber", {
            required: "Phone number is required",
            disabled: true,
          })}
          error={errors.phoneNumber}
        />
        <Input
          placeholder="Business name"
          register={register("artistName", {
            required: "Business name is required",
            disabled: true,
          })}
          error={errors.artistName}
        />
        <Input
          placeholder="Business registration number"
          register={register("businessNumber", {
            required: "Business number is required",
            disabled: true,
          })}
          error={errors.businessNumber}
        />
        <Input
          placeholder="Bank account name"
          register={register("bankAccName", {
            required: "Bank account name is required",
            disabled: true,
          })}
          error={errors.bankAccName}
        />
        <Input
          placeholder="Bank account number"
          register={register("bankAccNumber", {
            required: "Bank account number is required",
            disabled: true,
          })}
          error={errors.bankAccNumber}
        />
        <p className="text-left w-full">Support: +31 (0)76 231 1062</p>
      </form>
      <IconTabs />
    </div>
  );
};

export default AuthLayoutWrapper(Settings);
