import { AuthContextProvider } from "./AuthContext";

export const AuthLayoutWrapper = (Component: any) => {
  return function AuthLayoutWrapperComponent(props: any) {
    return (
      <AuthLayout>
        <Component {...props} />
      </AuthLayout>
    );
  };
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
