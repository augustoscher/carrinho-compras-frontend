const removeProductFromCart = (state, action) => {
  return {
    ...state,
    cart: {
      ...state.cart,
      total: state.cart.total - action.payload.total,
      products: state.cart.products.filter(
        product => product.id !== action.payload.id
      ),
    },
  };
};

const changeProduct = (state, product, payload) => ({
  ...state,
  cart: {
    ...state.cart,
    total: state.cart.total + product.price,
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

const incrementStock = (state, action) => ({
  ...state,
  productList: state.productList.map(item =>
    item.id === action.payload.id
      ? { ...item, stock: item.stock + action.payload.qtd }
      : item
  ),
});

const addProduct = (state, action) => {
  const existing = state.cart.products.filter(
    product => product.id === action.payload.id
  )[0];

  if (existing) {
    return changeProduct(state, existing, {
      qtd: existing.qtd + 1,
      total: existing.total + existing.price,
    });
  }

  return {
    ...state,
    cart: {
      ...state.cart,
      total: state.cart.total + action.payload.price,
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
    case 'INCREMENT_STOCK': {
      return incrementStock(state, action);
    }
    case 'ADD_TO_CART': {
      return addProduct(state, action);
    }
    case 'REMOVE_FROM_CART': {
      return removeProductFromCart(state, action);
    }
    default:
      return state;
  }
}
