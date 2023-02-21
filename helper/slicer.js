export const sliceAddr = (address) => {
  return address.slice(0, 5) + "..." + address.slice(38, 42);
};

export const sliceHash = (hash) => {
  return hash.slice(0, 5) + "..." + hash.slice(59, 64);
};
