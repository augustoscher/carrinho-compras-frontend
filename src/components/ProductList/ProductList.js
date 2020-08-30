import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { useQuery, gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query getProduct {
    getProduct {
      id
      name
      photo
      price
      stock
    }
  }
`;

const ProductList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

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
