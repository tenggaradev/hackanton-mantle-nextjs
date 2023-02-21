export const sliceAddr = (address) => {
  return address.slice(0, 5) + "..." + address.slice(38, 42);
};

export const sliceHash = (hash) => {
  return hash.slice(0, 5) + "..." + hash.slice(62, 66);
};

export const getUrlAddr = (url) => {
  return `https://explorer.testnet.mantle.xyz/address/${url}`
}

export const getUrlHash = (url) => {
  return `https://explorer.testnet.mantle.xyz/tx/${url}`
}

