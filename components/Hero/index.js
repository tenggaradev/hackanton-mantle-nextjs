import { useState } from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import avatar from "../../assets/img/avatar.svg";
import copy from "../../assets/img/copy2.svg";
import qrcode from "../../assets/img/qrcode.svg";
import wallet from "../../assets/img/wallet.svg";
import qrcodeIcon from "../../assets/img/qrcode2.svg";
import Select from "react-select";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Blockies from "react-blockies";

const style = {
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, 0)",
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

const Hero = ({ props }) => {
  const { balance, account } = props;
  const [open, setOpen] = useState(false);
  const [copyClipboard, setCopyClipboard] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const options = [
    { value: "Bitcoin (BTC)", label: "Bitcoin (BTC)" },
    { value: "Ethereum (ETH)", label: "Ethereum (ETH)" },
  ];

  const handleCopyClipboard = (param) => {
    navigator.clipboard.writeText(param);

    setCopyClipboard(!copyClipboard);
    setTimeout(() => {
      setCopyClipboard(false);
    }, 1000);
  };

  return (
    <>
      <div className="hero">
        <Container className="container">
          <div className="column">
            <div className="wrapper">
            {account ? (
              <>
              <div className="avatar-address">
                <div className="avatar">
                  {account ? (
                    <Blockies
                      seed={account}
                      className="identicon"
                      size={10}
                      scale={10}
                    />
                  ) : (
                    <Image src={avatar} alt="avatar" />
                  )}
                </div>
                <div className="address">
                  <p className="title">Address</p>
                  {account ? (
                    <p className="address-hash">{account}</p>
                  ) : (
                    <p className="address-hash">Please Connect Your Wallet</p>
                  )}

                  <div className="button-wrapper">
                    <button
                      className="btn-copy"
                      onClick={
                        account
                          ? () => handleCopyClipboard({ account })
                          : () => handleCopyClipboard("Connect Wallet")
                      }
                    >
                      <Image src={copy} alt="copy" />
                      {copyClipboard ? <span>Copied!</span> : ""}
                    </button>
                    <button className="btn-qrcode" onClick={handleOpen}>
                      <Image src={qrcodeIcon} alt="qr code button" />
                    </button>
                    <Modal open={open} onClose={handleClose}>
                      <Box sx={style}>
                        <Image src={qrcode} alt="qr-code" />
                      </Box>
                    </Modal>
                  </div>
                </div>
              </div>
              </>
            ) : (
              <div className="no-address">
                <p className="address-hash">Please Connect Your Wallet</p>
              </div>
            )}
              <div className="overview">
                <div className="item">
                  <div className="label">
                    <p>Balance</p>
                  </div>
                  <div className="value">
                    {account ? <p>860 BIT</p> : <p>{`-`}</p>}
                  </div>
                </div>
                <div className="item">
                  <div className="label">
                    <p>BIT Value</p>
                  </div>
                  <div className="value">
                    {account ? <p>$430.00 (@ $0.50 BIT)</p> : <p>{`-`}</p>}
                  </div>
                </div>
                <div className="item">
                  <div className="label">
                    <p>Tokens</p>
                  </div>
                  <div className="value">
                    {account ? (
                      <>
                        <div className="token-wallet">
                          <Select
                            className="select-autocomplete"
                            options={options}
                          />
                          {account ? (
                            <a
                              href={`https://explorer.testnet.mantle.xyz/address/${account}/tokens#address-tabs`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Image src={wallet} alt="wallet" />
                            </a>
                          ) : (
                            <a href="/" target="_blank" rel="noreferrer">
                              <Image src={wallet} alt="wallet" />
                            </a>
                          )}
                        </div>
                      </>
                    ) : (
                      <p>{`-`}</p>
                    )}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            {account ? (<Image src={qrcode} alt="qr code" className="qr-code" />) : (<div className="qr-placeholder"></div>)}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
