export default function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        productList: [...new Set([...state.productList, ...action.payload])],
      };
    case 'ADD_PRODUCT':
      console.log('add products: ', action.payload);
      return {
        ...state,
        cart: {
          ...state.cart,
          products: [...new Set([...state.cart.products, ...action.payload])],
        },
      };
    case 'DELETE_PRODUCTS':
      //payload is an id.
      //remove song which has song. id
      // console.log('...action.payload', action.payload);
      // const newsongs = state.songs.filter(id => id !== action.payload.id);

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
    default:
      return state;
  }
}
