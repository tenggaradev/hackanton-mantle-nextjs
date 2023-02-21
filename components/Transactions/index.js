import { useState, useEffect } from "react";
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

import sample from "@/constant/SampleTxs.json";
import { getAllTransaction } from "@/lib/MantleServices";

const Transactions = ({ props }) => {
  const { account } = props;
  const [value, setValue] = useState("1");
  const [transactions, setTransactions] = useState([]);
  const [tx, setTx] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const loadAllTx = async () => {
      if (account) {
        await getAllTransaction(account)
          .then((res) => setTransactions(res))
          .catch((error) => {
            console.error(error);
          });
      }
    };

    loadAllTx();

    // Test Function To Call Sample Txs
    // const loadSampleTx = async () => {
    //   console.log("Calling sample data");
    //   if (account) {
    //     const data = sample.data;
    //     setTx(data);
    //   }
    // };
    // loadSampleTx();
  }, [account]);

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
                <TabTransactions transactions={transactions} />
              </TabPanel>
              <TabPanel className="tab-content" value="2">
                <TabTransfer transactions={transactions} />
              </TabPanel>
              <TabPanel className="tab-content" value="3">
                <TabDeposit transactions={transactions} />
              </TabPanel>
              <TabPanel className="tab-content" value="4">
                <TabWithdrawal transactions={transactions} />
              </TabPanel>
            </TabContext>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Transactions;
