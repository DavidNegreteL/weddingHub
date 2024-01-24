import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { Cormorant } from "next/font/google";
const inter = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return <Component className={inter.className} {...pageProps} />;
}
