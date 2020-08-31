// import { gql } from '@apollo/client';
import gql from 'graphql-tag';

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
