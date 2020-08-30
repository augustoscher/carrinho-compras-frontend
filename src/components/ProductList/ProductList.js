import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { useQuery } from '@apollo/client';
import { getProduct } from '../../graphql/Queries';

const ProductList = () => {
  const { loading, error, data } = useQuery(getProduct);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.getProduct.map(({ id, name, photo, price, stock }) => (
    <ProductItem
      key={id}
      id={id}
      name={name}
      photo={photo}
      price={price}
      stock={stock}
    />
  ));
};

export default ProductList;
