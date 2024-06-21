const formatMoney = (price: string) => {
  return parseFloat(price).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export default formatMoney;