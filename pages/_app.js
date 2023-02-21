import "@/styles/globals.scss";
import "@/styles/Header.scss";
import "@/styles/Footer.scss";
import "@/styles/Hero.scss";
import "@/styles/Balance.scss";
import "@/styles/Transactions.scss";
import { StyledEngineProvider } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}
