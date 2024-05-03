export const formatBalance = (
  balanceBigInt: bigint,
  decimalFactor = 1e18,
  decimalPlaces = 18
) => {
  const balanceString = balanceBigInt.toString();

  const balanceDecimal = (parseInt(balanceString) / decimalFactor).toFixed(
    decimalPlaces
  );

  return balanceDecimal;
};
