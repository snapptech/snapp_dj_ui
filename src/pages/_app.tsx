import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div
      className={`min-h-screen ${inter.className} ${
        router.asPath !== "/" && "mobile"
      }`}
    >
      <Component {...pageProps} />
    </div>
  );
}
