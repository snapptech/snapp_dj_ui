import { AnimatePresence } from "framer-motion";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

type ServiceProvider = {
  name: string;
  imageUrl: string;
};

type Service = {
  title: string;
  id: string;
} & (OptionsService | TextService);

export type OptionsService = {
  type: "options";
  options: { id: string; label: string }[];
};
export type TextService = { type: "text" };

type UserLandingProps = {
  serviceProvider: ServiceProvider;
  services: Service[];
};

const ServiceItem = ({
  service,
  onSelect,
  isSelected,
}: {
  service: Service;
  onSelect(): void;
  isSelected: boolean;
}) => {
  return (
    <motion.div
      className={classNames("flex flex-col border rounded-xl")}
      key={service.id}
      onClick={onSelect}
    >
      <div
        className={classNames("flex flex-row border-b px-4 py-2", {
          "border-transparent": !isSelected,
        })}
      >
        {service.title}
      </div>
      <AnimatePresence>
        {service.type === "options" && isSelected && (
          <>
            {service.options.map(({ id, label }) => (
              <motion.div
                className="flex flex-row overflow-hidden"
                key={id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="px-4 py-2">{label}</div>
              </motion.div>
            ))}
          </>
        )}
        {service.type === "text" && isSelected && (
          <motion.div
            className="flex flex-row overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <textarea
              rows={2}
              className="bg-transparent p-4 w-full"
              placeholder="Type something"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function UserLanding({ serviceProvider, services }: UserLandingProps) {
  const [selected, setSelected] = useState<string>();

  return (
    <div className="container p-8 gap-2 flex flex-col">
      <div className="flex flex-row gap-2 mb-4">
        <Image
          src={serviceProvider.imageUrl}
          width={64}
          height={64}
          className="border rounded-full overflow-hidden w-16 h-16 object-cover object-center "
          alt={`Image of ${serviceProvider.name}`}
        />
        <h1>{serviceProvider.name}</h1>
      </div>
      {services.map((service, i) => (
        <ServiceItem
          key={service.id}
          onSelect={() => setSelected(service.id)}
          isSelected={service.id === selected}
          service={service}
        />
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  UserLandingProps
> = async () => {
  const services: Service[] = [
    { id: "0", title: "Shoutout", type: "text" },
    {
      id: "1",
      title: "Song request",
      type: "options",
      options: [
        {
          id: "2",
          label: "A milli (house remix)",
        },
        {
          id: "15",
          label: "Dj Angerfist - Pennywise",
        },
      ],
    },
    { id: "3", title: "Selfie", type: "text" },
  ];
  return {
    props: {
      serviceProvider: {
        name: "Simon Rothert",
        imageUrl: "/EXAMPLE_DJ_PLACEHOLDER.jpg",
      },
      services,
    },
  };
};

export default UserLanding;
