import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Balance from "../components/Balance";
import Transactions from "../components/Transactions";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tenggara Hackanton Mantle</title>
        <meta name="description" content="Tenggara Hackanton Mantle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Balance />
      <Transactions />
      <Footer />
    </>
  );
}
