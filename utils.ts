export const formatBrlCurrency = (value: number) =>
  value
    .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
    .slice(0, -3);
