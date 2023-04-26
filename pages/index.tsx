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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative mx-4 text-gray-800 ">
        <Header />
        <main className="flex flex-col  mt-20 gap-y-10">
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
