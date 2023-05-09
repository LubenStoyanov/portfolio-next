import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Profile from "@/components/profile";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Craft from "@/components/craft";
import Tools from "@/components/tools";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "@/components/navbar";
import { useFollowPointer } from "@/components/hooks/useFollowPointer";

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
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

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
        <header>
          <Navbar translate={translate} />
        </header>
        <main
          className={`flex flex-col text-lg md:w[75ch] text-[#0D0E13] bg-[#F9FAFE]`}
        >
          <motion.div
            ref={ref}
            className="md:w-8 md:h-8 rounded-[50%] bg-[#ef6804]"
            animate={{ x, y }}
            transition={{
              type: "spring",
              damping: 3,
              stiffness: 50,
              restDelta: 0.001,
            }}
          />
          <Hero translate={translate} />
          <Profile translate={translate} />
          <Tools translate={translate} />
          <Craft translate={translate} />
          <Contact translate={translate} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
