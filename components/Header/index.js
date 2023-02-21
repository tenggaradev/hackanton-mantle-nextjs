import { useState } from "react";
import Image from "next/image";
import mantleLogo from "../../assets/img/mantle-white-logo.svg";
import searchLogo from "../../assets/img/search.svg";
import searchLogo2 from "../../assets/img/search2.svg";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
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
            <Button className="button-connect">Connect Wallet</Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
