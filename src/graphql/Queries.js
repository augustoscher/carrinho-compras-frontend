import { gql } from '@apollo/client';

export const getProduct = gql`
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
