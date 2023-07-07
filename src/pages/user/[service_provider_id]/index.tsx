import { GetServerSideProps } from "next";

type ServiceProvider = {
  name: string;
};

type UserLandingProps = {
  serviceProvider: ServiceProvider;
};

function UserLanding({ serviceProvider }: UserLandingProps) {
  return <div className="container">{serviceProvider.name}</div>;
}

export const getServerSideProps: GetServerSideProps<
  UserLandingProps
> = async () => {
  return {
    props: {
      serviceProvider: {
        name: "Simon Rothert",
      },
    },
  };
};

export default UserLanding;
