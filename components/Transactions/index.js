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

import AllTxSample from "@/constant/AllTransactionsSample.json";
import InternalSample from "@/constant/InternalSample.json";
import { getAllTransaction } from "@/lib/MantleServices";

const Transactions = ({ props }) => {
  const { account } = props;
  const [value, setValue] = useState("1");
  const [transactions, setTransactions] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const formatData = async (data) => {
    console.log("start formatting data tx");

    // Concat the new data with the selected sample data
    const internalTransfer = InternalSample.data;
    const allTransactions = internalTransfer.concat(data);
    setTransactions(allTransactions);
    console.log(
      "Finish checking your deposit and withdrawal transactions, we add some sample data as well"
    );

    return allTransactions;
  };

  useEffect(() => {
    // Test Function To Call Sample Txs
    const loadSampleTx = async () => {
      if (account) {
        console.log("Calling sample data");
        const data = AllTxSample.data;
        const formattedData = await formatData(data);
        setTransactions(formattedData);
      }
    };
    loadSampleTx();

    // const loadAllTx = async () => {
    //   if (account) {
    //     await getAllTransaction(account)
    //       .then((res) => formatData(res))
    //       .catch((error) => {
    //         console.error(error);
    //         console.log(
    //           "Need to consider run out of API Call, so we provide sample data in case of errors"
    //         );
    //         setTransactions(AllTxSample.data);
    //       });
    //   }
    // };

    // loadAllTx();
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
                <TabTransactions transactions={transactions} props={props}/>
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
