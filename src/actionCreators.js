export const addToCart = ({ id, name, photo, price }) => ({
  type: 'ADD_TO_CART',
  payload: { id, name, photo, price, qtd: 1, total: price },
});

export const removeFromCart = ({ id, total }) => ({
  type: 'REMOVE_FROM_CART',
  payload: { id, total },
});

export const decrementStock = id => ({
  type: 'DECREMENT_STOCK',
  payload: { id },
});

export const incrementStock = ({ id, qtd }) => ({
  type: 'INCREMENT_STOCK',
  payload: { id, qtd },
});

export const removeQtdFromProductCart = ({ id, price }) => ({
  type: 'REMOVE_QTD_FROM_PRODUCT_CART',
  payload: { id, price },
});

export const setCustomerName = name => ({
  type: 'SET_CUSTOMER_NAME',
  payload: { name },
});

export const setCreditCard = creditCard => ({
  type: 'SET_CREDIT_CARD',
  payload: { creditCard },
});

export const orderCreated = () => ({
  type: 'ORDER_CREATED',
});

export const fetchProducts = getProduct => ({
  type: 'FETCH_PRODUCTS',
  payload: getProduct,
});
