export default function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        productList: [...new Set([...state.productList, ...action.payload])],
      };
    case 'DELETE_PRODUCTS':
      //payload is an id.
      //remove song which has song. id
      // console.log('...action.payload', action.payload);
      // const newsongs = state.songs.filter(id => id !== action.payload.id);
      return {
        productList: [],
      };
    default:
      return state;
  }
}
