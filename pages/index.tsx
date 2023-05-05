import { useState, useEffect } from "react";
import Profile from "@/components/profile";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Craft from "@/components/craft";
import Tools from "@/components/tools";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  const { t: translate } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // if (!mounted) return <Loader />;

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
      <div className="relative ">
        <Header translate={translate} />
        <main
          className={`flex flex-col text-lg lg:w[75ch] text bg-[#F9FAFE]`}
          style={{ color: "#0D0E13" }}
        >
          <Hero translate={translate} />
          <Profile translate={translate} />
          <Tools translate={translate} />
          <Craft translate={translate} />
          <Contact translate={translate} />
        </main>
        <Footer />
      </div>
    </>
  );
}
