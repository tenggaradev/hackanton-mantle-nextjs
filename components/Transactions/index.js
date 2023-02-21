import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabTransactions from "./TabTransactions";
import TabTransfer from "./TabTransfer";
import TabDeposit from "./TabDeposit";
import TabWithdrawal from "./TabWithdrawal";

const Transactions = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="transactions">
        <Container className="container">
          <Box sx={{ width: "100%" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  className="tabs"
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  allowScrollButtonsMobile
                  aria-label="tab"
                >
                  <Tab className="tab" label="Transactions" value="1" />
                  <Tab className="tab" label="Transfer" value="2" />
                  <Tab className="tab" label="Deposit" value="3" />
                  <Tab className="tab" label="Withdrawal" value="4" />
                </TabList>
              </Box>
              <TabPanel className="tab-content" value="1">
                <TabTransactions />
              </TabPanel>
              <TabPanel className="tab-content" value="2">
                <TabTransfer />
              </TabPanel>
              <TabPanel className="tab-content" value="3">
                <TabDeposit />
              </TabPanel>
              <TabPanel className="tab-content" value="4">
                <TabWithdrawal />
              </TabPanel>
            </TabContext>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Transactions;
