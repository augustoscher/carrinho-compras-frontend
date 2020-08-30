import { createContext } from 'react';

const Context = createContext({
  cart: {
    customer: '',
    creditCard: '',
    total: 0,
    products: [],
  },
});

export default Context;
