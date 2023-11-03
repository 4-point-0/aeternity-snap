export const shortenAddress = (address: string) => {
  if (!address || address.length < 6) {
    return address;
  }
  const prefix = address.slice(0, 6); // Keep first 6 characters
  const suffix = address.slice(-4); // Keep last 4 characters
  return `${prefix}...${suffix}`;
};

export const shortenHash = (hash: string) => {
  if (!hash || hash.length < 52) {
    return hash;
  }
  const prefix = hash.slice(0, 10); // Keep first 10 characters
  const suffix = hash.slice(-2); // Keep last 2 characters
  return `${prefix}...${suffix}`;
};
