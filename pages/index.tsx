import { useState, useEffect } from "react";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Works from "@/components/works";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Loader from "../components/loader";

export default function Home() {
  const { t: translate } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <Loader />;

  return (
    <>
      <Head>
        <title>Luben Stoyanov | Web Developer</title>
        <meta
          name="description"
          content="Portfolio Website of Luben Stoyanov"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="relative mx-5 sm:mx-20">
        <Header translate={translate} />
        <main
          className={`flex flex-col text-xl sm:text-4xl sm:leading-3xl sm:w[75ch]`}
        >
          <Hero translate={translate} />
          <About translate={translate} />
          <Works translate={translate} />
          <Contact translate={translate} />
        </main>
        <Footer translate={translate} />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
