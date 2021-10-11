const toDollars = (cents) => {
  const dollars = (cents / 100).toString();

  if (dollars.substr(-2, 1) == ".") {
    return dollars + "0";
  }

  return dollars;
};
