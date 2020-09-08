/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { graphql } from '@apollo/react-hoc';
import { getProduct } from '../../graphql/Queries';

import ProductItem from '../ProductItem/ProductItem';
import Context from '../../context';
import { fetchProducts } from '../../actionCreators';

const ProductList = ({ data: { loading, error, getProduct } }) => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    if (getProduct) {
      dispatch(fetchProducts(getProduct));
    }
  }, [getProduct]);

  if (error) return <p>Error :(</p>;
  if (state) {
    return state.productList.map(({ id, name, photo, price, stock }) => (
      <ProductItem
        key={id}
        id={id}
        name={name}
        photo={photo}
        price={price}
        stock={stock}
      />
    ));
  }
  if (loading) return <p>Loading...</p>;
};

export default graphql(getProduct)(ProductList);
