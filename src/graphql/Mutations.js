import gql from 'graphql-tag';

export const createOrder = gql`
  mutation createOrder($order: OrderInput!) {
    createOrder(input: $order)
  }
`;
