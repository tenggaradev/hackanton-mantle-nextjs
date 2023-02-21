import moment from "moment";

export const sliceAddr = (address) => {
  return address.slice(0, 5) + "..." + address.slice(38, 42);
};

export const sliceHash = (hash) => {
  return hash.slice(0, 5) + "..." + hash.slice(62, 66);
};

export const getUrlAddr = (url) => {
  return `https://explorer.testnet.mantle.xyz/address/${url}`;
};

export const getUrlHash = (url) => {
  return `https://explorer.testnet.mantle.xyz/tx/${url}`;
};

export const textBlock = (type) => {
  switch (type) {
    case "incoming":
      return "Incoming Layer 2";
    case "outgoing":
      return "Outgoing Layer 2";
    case "deposit":
      return "Deposit From Layer 1";
    case "withdrawal":
      return "Withdrawal To Layer 1";
    default:
  }
};

export const convertDate = (unix) => {
  const day = moment.unix(unix).format("DD/MM/YYYY")
  return day;
}
