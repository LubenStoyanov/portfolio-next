import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Flex } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

const roboto_flex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <div className={`${roboto_flex.className} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}
