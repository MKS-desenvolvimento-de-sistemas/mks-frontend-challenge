const formatCurrency = new Intl.NumberFormat(undefined, {
	style: 'currency',
	currency: 'BRL'
});

export const numberToPrice = (value: number) => {
  return formatCurrency.format(value);
}
