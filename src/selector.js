export const getStock = (state, productId) => {
  const [p] = state.productList.filter(item => item.id === productId);
  return p.stock;
};

export const getProductFromCart = (state, productId) =>
  state.cart.products.filter(product => product.id === productId)[0];
