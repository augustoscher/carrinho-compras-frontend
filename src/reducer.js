import { getProductFromCart } from './selector';

const incCart = (state, product, productPayload) => ({
  ...state,
  cart: {
    ...state.cart,
    total: state.cart.total + product.price,
    products: state.cart.products.map(item =>
      item.id === product.id ? { ...item, ...productPayload } : item
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

const addProduct = (state, action) => {
  const existing = getProductFromCart(state, action.payload.id);

  if (existing) {
    return incCart(state, existing, {
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

const removeQtdFromProductInCart = (state, action) => {
  const existing = getProductFromCart(state, action.payload.id);
  if (existing.qtd === 1) {
    return {
      ...state,
      cart: {
        ...state.cart,
        total: state.cart.total - action.payload.price,
        products: state.cart.products.filter(
          product => product.id !== action.payload.id
        ),
      },
    };
  }

  return {
    ...state,
    cart: {
      ...state.cart,
      total: state.cart.total - action.payload.price,
      products: state.cart.products.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              qtd: item.qtd - 1,
              total: item.total - action.payload.price,
            }
          : item
      ),
    },
  };
};

const setCreditCard = (state, action) => ({
  ...state,
  cart: {
    ...state.cart,
    creditCard: action.payload.creditCard,
  },
});

const setCustomerName = (state, action) => ({
  ...state,
  cart: {
    ...state.cart,
    customer: action.payload.name,
  },
});

const resetInitialState = state => ({
  ...state,
  productList: [],
  cart: {
    customer: '',
    creditCard: '',
    total: 0,
    products: [],
  },
});

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
    case 'REMOVE_QTD_FROM_PRODUCT_CART': {
      return removeQtdFromProductInCart(state, action);
    }
    case 'SET_CUSTOMER_NAME': {
      return setCustomerName(state, action);
    }
    case 'SET_CREDIT_CARD': {
      return setCreditCard(state, action);
    }
    case 'ORDER_CREATED': {
      return resetInitialState(state);
    }
    default:
      return state;
  }
}
