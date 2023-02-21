import { useMemo, useState, useEffect } from "react";
import { data } from "./data.js";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const TabTransactions = () => {
  const [dataTab, setDataTab] = useState([]);
  const [loading, setLoading] = useState(false);

  const filteredTab = useMemo(() => {
    return dataTab.filter((item) => item);
  }, [dataTab]);

  useEffect(() => {
    setLoading(true);
    setDataTab(data);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="tab-wrapper">
        {filteredTab.map((item, index) => (
          <div className="tab-item" key={index}>
            {loading ? (
              <Skeleton
                className="skeleton"
                variant="rounded"
                width={"100%"}
                height={50}
              />
            ) : (
              <>
                <div className="col type">
                  <p>{item.type}</p>
                </div>
                <div className="col">
                  <p>{item.date}</p>
                  <p className={"status-" + item.status}>{item.status}</p>
                </div>
                <div className="col">
                  <p className="title">From</p>
                  <Tooltip
                    enterTouchDelay={0}
                    className="tooltip"
                    title={item.from}
                  >
                    <p>{item.from}</p>
                  </Tooltip>
                </div>
                <div className="col">
                  <p className="title">To</p>
                  <Tooltip
                    enterTouchDelay={0}
                    className="tooltip"
                    title={item.to}
                  >
                    <p>{item.to}</p>
                  </Tooltip>
                </div>
                <div className="col">
                  <p className="title">Amount</p>
                  <p>{item.amount}</p>
                </div>
                <div className="col col-withdrawal">
                  <p className="title">Tx Hash</p>

                  {item.tab === 3 && item.status === "pending" ? (
                    <Button className="button-withdrawal">
                      Claim withdrawal
                    </Button>
                  ) : (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={item.txHash.url ? item.txHash.url : ""}
                    >
                      {item.txHash.hash}
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default TabTransactions;
