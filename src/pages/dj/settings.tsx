import { AuthLayoutWrapper } from "@/lib/auth/AuthLayout";

const Settings = () => {
  return (
    <div className="flex flex-col container gap-5 text-center px-8 h-full py-6">
      <h1 className="text-lg">Settings</h1>

      <div className="py-8">
        <p className="text-md">Pay out</p>
        <p className="text-3xl font-bold">€ 1200</p>
      </div>
    </div>
  );
};

export default AuthLayoutWrapper(Settings);
