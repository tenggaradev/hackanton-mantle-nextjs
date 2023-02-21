import React from "react";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <footer>
      <Container className="container">
        <div className="wrapper">
          <p>Copyright &copy; 2023</p>
          <p>|</p>
          <p>
            Design by{" "}
            <a href="https://www.tenggara.dev" target="_blank" rel="noreferrer">
              Tenggara
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
