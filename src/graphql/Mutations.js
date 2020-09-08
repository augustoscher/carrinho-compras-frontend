import { gql } from '@apollo/client';

export const createOrder = gql`
  mutation createOrder($order: OrderInput!) {
    createOrder(input: $order)
  }
`;
