// const removeProduct = (state, action) => {
//   const products = [
//     ...state.cart.products.slice(0, action.productId),
//     ...state.cart.products.slice(action.productId + 1),
//   ];
//   return {
//     ...state,
//     cart: {
//       ...state.cart,
//       products,
//     },
//   };
// };

const changeProduct = (state, product, payload) => ({
  ...state,
  cart: {
    ...state.cart,
    products: state.cart.products.map(item =>
      item.id === product.id ? { ...item, ...payload } : item
    ),
  },
});

const decrementStock = (state, action) => ({
  ...state,
  productList: state.productList.map(item =>
    item.id === action.payload.id ? { ...item, stock: item.stock - 1 } : item
  ),
});

const addProduct = (state, action) => {
  const existing = state.cart.products.filter(
    product => product.id === action.payload.id
  )[0];

  if (existing) {
    return changeProduct(state, existing, {
      qtd: existing.qtd + 1,
    });
  }

  return {
    ...state,
    cart: {
      ...state.cart,
      products: [...new Set([...state.cart.products, ...[action.payload]])],
    },
  };
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS': {
      return {
        ...state,
        productList: [...new Set([...state.productList, ...action.payload])],
      };
    }
    case 'DECREMENT_STOCK': {
      return decrementStock(state, action);
    }
    case 'ADD_TO_CART': {
      return addProduct(state, action);
    }
    case 'REMOVE_FROM_CART': {
      // productList: [],
      // cart: {
      //   customer: '',
      //   creditCard: '',
      //   total: 0,
      //   products: [],
      // },
      return {
        productList: [],
      };
    }
    default:
      return state;
  }
}
