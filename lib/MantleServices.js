import { ethers } from "ethers";
import axios from "axios";
import { CHAIN_ID, BLOCK_START } from "@/constant";
const mantleSDK = require("@mantleio/sdk");

let crossChainMessenger;

const key = process.env.NEXT_PUBLIC_PRIVKEY_1;
const l1RpcProvider = new ethers.providers.JsonRpcProvider(
  process.env.NEXT_PUBLIC_ALCHEMY_URL
);
const l2RpcProvider = new ethers.providers.JsonRpcProvider(
  process.env.NEXT_PUBLIC_MANTLE_TESTNET_URL
);
const l1Wallet = new ethers.Wallet(key, l1RpcProvider);
const l2Wallet = new ethers.Wallet(key, l2RpcProvider);

const setup = async () => {
  crossChainMessenger = new mantleSDK.CrossChainMessenger({
    l1ChainId: CHAIN_ID.goerli,
    l2ChainId: CHAIN_ID.mantleTestnet,
    l1SignerOrProvider: l1Wallet,
    l2SignerOrProvider: l2Wallet,
  });
};

const ERC20ABI = [
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const getSymbol = async (l1Addr) => {
  console.log("Checking the correct currency");
  if (l1Addr == "0x0000000000000000000000000000000000000000") return "ETH";
  if (l1Addr == "0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5") return "BIT";
  const l1Contract = new ethers.Contract(
    l1Addr,
    ERC20ABI,
    crossChainMessenger.l1SignerOrProvider
  );
  return await l1Contract.symbol();
};

// Get Timestamp of Deposit/Withdrawl Tx
const getTimestamp = async (hash) => {
  console.log("Checking your tx timestamp");
  const { data } = await axios({
    method: "post",
    url: `https://rpc.testnet.mantle.xyz/`,
    headers: { "Content-Type": "application/json" },
    data: {
      id: 3,
      method: "eth_getTransactionByHash",
      params: [hash.toString()],
    },
  });
  const result = data.result;
  return parseInt(result.l1Timestamp, 16);
};

// Describe a cross domain transaction, either deposit or withdrawal
const describeTx = async (tx, type) => {
  let transactionReceipt;

  const statusMessage = await crossChainMessenger.getMessageStatus(
    tx.transactionHash
  );

  if (statusMessage !== 4) {
    ({ transactionReceipt } = await crossChainMessenger.getMessageReceipt(
      tx.transactionHash
    ));
  }

  const timestamp =
    type === "deposit"
      ? await getTimestamp(transactionReceipt.transactionHash)
      : await getTimestamp(tx.transactionHash);

  return {
    type,
    blockHash:
      statusMessage === 4 ? tx.transactionHash : transactionReceipt.blockHash,
    hash:
      statusMessage === 4
        ? tx.transactionHash
        : transactionReceipt.transactionHash,
    gasUsed: statusMessage === 4 ? 0 : parseInt(transactionReceipt.gasUsed, 16),
    from: tx.from,
    to: tx.to,
    value: tx.amount / 1e18,
    symbol: await getSymbol(tx.l1Token),
    timestamp,
    status:
      (await crossChainMessenger.getMessageStatus(tx.transactionHash)) ==
      mantleSDK.MessageStatus.RELAYED
        ? "success"
        : "pending",
  };
};

// Get all the deposit txs
const getDepositTransactions = async (address) => {
  const allDepositTx = [];

  const deposits = await crossChainMessenger.getDepositsByAddress(address, {
    fromBlock: BLOCK_START,
    toBlock: "latest",
  });

  for (let i = 0; i < deposits.length; i++) {
    allDepositTx.push(await describeTx(deposits[i], "deposit"));
  }

  return allDepositTx;
};

const getWithdrawalTransactions = async (address) => {
  const allWithdrawalTx = [];

  const withdrawals = await crossChainMessenger.getWithdrawalsByAddress(
    address
  );

  // const allWithdrawalTx = Promise.all(
  //   withdrawals.map(async (tx) => {
  //     await describeTx(tx, "withdrawal");
  //   })
  // ).catch((err) => console.log(err));

  for (let i = 0; i < withdrawals.length; i++) {
    allWithdrawalTx.push(await describeTx(withdrawals[i], "withdrawal"));
  }

  return allWithdrawalTx;
};

export const getAllTransaction = async (address) => {
  console.log("Prepare the setup");
  await setup();
  console.log("Checking all your transactions");
  console.log("The best time to get a cup of coffee as well");

  const depositTx = await getDepositTransactions(address);
  console.log("Oh, here are your depositTx", depositTx);

  // const start = performance.now();
  console.log("Now we'll be checking your withdrawals transactions");
  const withdrawalTx = await getWithdrawalTransactions(address);
  console.log("Here are your withdrawal txs", withdrawalTx);
  // const end = performance.now();
  // console.log(`Execution time: ${end - start} ms`);
  console.log("Let us pack all your deposits and withdrawals");
  const allTxs = depositTx.concat(withdrawalTx);
  return allTxs;
};
