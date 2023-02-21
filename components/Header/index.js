import { useState, useEffect } from "react";
import Image from "next/image";
import mantleLogo from "../../assets/img/mantle-white-logo.svg";
import searchLogo from "../../assets/img/search.svg";
import searchLogo2 from "../../assets/img/search2.svg";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { ethers } from "ethers";
import { CHAIN_ID } from "@/constant";
import { sliceAddr } from "@/helper/slicer";

const Header = ({ props }) => {
  const { chainId, provider, account, setAccount, setBalance } = props;
  const [open, setOpen] = useState(false);
  const [network, setIsNetwork] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const loadAccount = async (provider) => {
    let balance;

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const accountAddress = ethers.utils.getAddress(accounts[0]);

    if (provider) {
      balance = await provider.getBalance(accountAddress);
      balance = ethers.utils.formatEther(balance);
    }

    setAccount(accountAddress);
    setBalance(balance);
  };

  const handleSwitchNetwork = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1389" }], // chainId must be in hexadecimal numbers
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x1389",
                chainName: "Mantle Testnet",
                rpcUrls: ["https://rpc.testnet.mantle.xyz/"],
                nativeCurrency: {
                  name: "BitDAO",
                  symbol: "BIT",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://explorer.testnet.mantle.xyz/"],
              },
            ],
          });
          setIsNetwork(true);
        } catch (error) {
          console.log(error);
          setIsNetwork(false);
        }
      }
    }
  };

  const handleConnect = async () => {
    loadAccount(provider);
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
      window.ethereum.on("accountsChanged", () => {
        loadAccount(provider);
      });
    }
    // if (account !== "") {
    //   const checkAccount = async () => {
    //     await getTx(account.address);
    //   };
    //   checkAccount();
    // }
    const checkNetwork = async () => {
      (await chainId) !== CHAIN_ID.mantleTestnet
        ? setIsNetwork(false)
        : setIsNetwork(true);
    };
    checkNetwork();
  }, [account, chainId]);

  return (
    <>
      <header>
        <div className="wrapper">
          <div className="logo">
            <Image src={mantleLogo} alt="logo" />
          </div>
          <div className={open ? `search open` : `search`}>
            <Image src={searchLogo} alt="search" />
            <input
              type="search"
              placeholder="Address / Txn hash / Block / Token"
            />
            <Button className="button-search">Search</Button>
          </div>
          <div className="connect">
            <IconButton
              className="search-mobile"
              aria-label="search"
              onClick={handleOpen}
            >
              <Image src={searchLogo2} alt="search" />
            </IconButton>
            {network ? (
              account ? (
                <Button className="button-connect" onClick={handleConnect}>
                  {sliceAddr(account)}
                </Button>
              ) : (
                <Button className="button-connect" onClick={handleConnect}>
                  Connect Wallet
                </Button>
              )
            ) : (
              <Button className="button-connect" onClick={handleSwitchNetwork}>
                Switch Network
              </Button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
