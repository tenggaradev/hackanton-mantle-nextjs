import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Balance from "../components/Balance";
import Transactions from "../components/Transactions";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function Home() {
  const [provider, setProvider] = useState();
  const [chainId, setChainId] = useState(5);
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);

  const loadBlockchainData = async () => {
    if (window.ethereum) {
      const connection = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(connection);

      const { chainId } = await connection.getNetwork();
      setChainId(chainId);

      const isMetaMaskConnected = await connection.listAccounts();
      if (isMetaMaskConnected.length > 0) {
        setAccount(isMetaMaskConnected[0]);
      }
    }
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const props = {
    provider,
    chainId,
    account,
    setAccount,
    balance,
    setBalance,
  };

  return (
    <>
      <Head>
        <title>Tenggara Hackanton Mantle</title>
        <meta name="description" content="Tenggara Hackanton Mantle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header props={props} />
      <Hero props={props} />
      <Balance props={props} />
      <Transactions props={props} />
      <Footer />
    </>
  );
}
