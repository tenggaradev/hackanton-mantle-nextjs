import { useState } from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import avatar from "../../assets/img/avatar.svg";
import copy from "../../assets/img/copy2.svg";
import qrcode from "../../assets/img/qrcode.svg";
import wallet from "../../assets/img/wallet.svg";
import info from "../../assets/img/info.svg";
import qrcodeIcon from "../../assets/img/qrcode2.svg";
import Select from "react-select";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

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
    { value: "Token 1", label: "Token 1" },
    { value: "Token 2", label: "Token 2" },
    { value: "Token 3", label: "Token 3" },
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
              <div className="avatar-address">
                <div className="avatar">
                  <Image src={avatar} alt="avatar" />
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
                      onClick={() =>
                        handleCopyClipboard(
                          "0xd49f54632670171d5944024b1a3780e762c9fab5"
                        )
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
              <div className="overview">
                <div className="item">
                  <div className="label">
                    <Tooltip
                      enterTouchDelay={0}
                      className="tooltip"
                      title="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    >
                      <Image src={info} alt="info" />
                    </Tooltip>
                    <p>Balance</p>
                  </div>
                  <div className="value">
                    <p>1,999,873.239484 BIT</p>
                  </div>
                </div>
                <div className="item">
                  <div className="label">
                    <Tooltip
                      enterTouchDelay={0}
                      className="tooltip"
                      title="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    >
                      <Image src={info} alt="info" />
                    </Tooltip>
                    <p>BIT Value</p>
                  </div>
                  <div className="value">
                    <p>$20.87 (@ $1.23 BIT)</p>
                  </div>
                </div>
                <div className="item">
                  <div className="label">
                    <Tooltip
                      enterTouchDelay={0}
                      className="tooltip"
                      title="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    >
                      <Image src={info} alt="info" />
                    </Tooltip>
                    <p>Tokens</p>
                  </div>
                  <div className="value">
                    <div className="token-wallet">
                      <Select
                        className="select-autocomplete"
                        options={options}
                      />
                      <a href="/" target="_blank" rel="noreferrer">
                        <Image src={wallet} alt="wallet" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <Image src={qrcode} alt="qr code" className="qr-code" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
