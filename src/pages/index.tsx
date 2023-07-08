import Image from "next/image";
import SignUp1 from "./dj/signup";
import Button from "@/lib/components/Button";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();
  return (
    <div className="bg-[url('/landing/background.png')] bg-cover bg-top">
      <div className="h-screen container justify-between flex flex-col">
        <nav className="flex flex-row justify-between">
          <Image alt="Logo" src="/logo.svg" width={127} height={49} />
          <Button
            type="button"
            onClick={() => push("/dj/signup")}
            color="primary"
          >
            WEB APP
          </Button>
        </nav>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-6">
            <p>Earn More Doing What You Love</p>
            <p>
              Seamlessly manage song requests, captivate fans like never before,
              and unlock new income streams.
            </p>

            <Button
              type="button"
              onClick={() => push("/dj/signup")}
              color="primary"
            >
              WEB APP
            </Button>
          </div>
          <Image src="/landing/hero-phone.png" width={190} height={470} alt="Hero phone" />
        </div>
      </div>
    </div>
  );
}
