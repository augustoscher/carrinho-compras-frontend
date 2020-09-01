export const currencyFormatter = value =>
  value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
