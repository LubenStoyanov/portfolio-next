import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Works from "@/components/works";
import Head from "next/head";

export default function Home() {
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
        <Header />
        <main className="flex flex-col text-[7vw] sm:text-[4vw] leading-[7vw] sm:leading-[4vw]  divide-y-2 divide-black">
          <Hero />
          <About />
          <Works />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
