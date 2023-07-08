import { useAuthContext } from "@/lib/auth/AuthContext";
import { AuthLayoutWrapper } from "@/lib/auth/AuthLayout";
import { IconTabs } from "@/lib/components/IconTabs";
import { Input } from "@/lib/components/Input";
import { getUser } from "@/lib/modals/user";
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

      setValue("fullname", userData.name);
      setValue("phone_number", userData.phoneNumber);
      setValue("business_name", userData.artistName);
      setValue("business_number", userData.businessNumber);
      setValue("bank_acc_name", userData.bankAccName);
      setValue("bank_acc_number", userData.bankAccNumber);
    }

    updateUserSettings();
  }, [authUser]);

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
          register={register("fullname", {
            required: "Full name is required",
            disabled: true,
          })}
          error={errors.fullname}
        />
        <Input
          placeholder="Phone number"
          register={register("phone_number", {
            required: "Phone number is required",
            disabled: true,
          })}
          error={errors.phone_number}
        />
        <Input
          placeholder="Business name"
          register={register("business_name", {
            required: "Business name is required",
            disabled: true,
          })}
          error={errors.business_name}
        />
        <Input
          placeholder="Business registration number"
          register={register("business_number", {
            required: "Business number is required",
            disabled: true,
          })}
          error={errors.business_number}
        />
        <Input
          placeholder="Bank account name"
          register={register("bank_acc_name", {
            required: "Bank account name is required",
            disabled: true,
          })}
          error={errors.bank_acc_name}
        />
        <Input
          placeholder="Bank account number"
          register={register("bank_acc_number", {
            required: "Bank account number is required",
            disabled: true,
          })}
          error={errors.bank_acc_number}
        />
        <p className="text-left w-full">Support: +31 (0)76 231 1062</p>
      </form>
      <IconTabs selectedTab="settings" />
    </div>
  );
};

export default AuthLayoutWrapper(Settings);
