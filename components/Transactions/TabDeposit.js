import { useMemo, useState, useEffect } from "react";
import { data } from "./data.js";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import {
  sliceAddr,
  sliceHash,
  getUrlHash,
  getUrlAddr,
} from "@/helper/formatter.js";
import sampleTxs from "../../constant/SampleTxs.json";

const TabDeposit = ({transactions}) => {
  const allTransactionsData = transactions;
  const [dataTab, setDataTab] = useState([]);
  const [loading, setLoading] = useState(false);

  const filteredTab = useMemo(() => {
    return dataTab.filter((item) => item.type === "deposit");
  }, [dataTab]);

  useEffect(() => {
    setLoading(true);
    setDataTab(allTransactionsData);
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
                  <p>{item.timestamp}</p>
                  <p className={"status-" + item.status}>{item.status}</p>
                </div>
                <div className="col">
                  <p className="title">From</p>
                  <Tooltip
                    enterTouchDelay={0}
                    className="tooltip"
                    title={item.from}
                  >
                    <p>{sliceAddr(item.from)}</p>
                  </Tooltip>
                </div>
                <div className="col">
                  <p className="title">To</p>
                  <Tooltip
                    enterTouchDelay={0}
                    className="tooltip"
                    title={item.to}
                  >
                    <p>{sliceAddr(item.to)}</p>
                  </Tooltip>
                </div>
                <div className="col">
                  <p className="title">Amount</p>
                  <p>{item.value}</p>
                </div>
                <div className="col col-withdrawal">
                  <p className="title">Tx Hash</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={getUrlHash(item.hash)}
                  >
                    {sliceHash(item.hash)}
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default TabDeposit;
