import React from 'react';
import ProductList, { GET_PRODUCTS } from './ProductList';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

describe('ProductList', () => {
  test('should render product list', async () => {
    const mocks = [
      {
        request: {
          query: GET_PRODUCTS,
        },
        result: {
          data: {
            getProduct: {
              id: '1',
              name: 'Smartwatch',
              photo: 'photo',
              price: 1999.99,
              stock: 1,
            },
          },
        },
      },
    ];

    const { findByText, getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );

    expect(getByText('Loading...')).toBeInTheDocument();
    screen.debug();
    await waitFor(() => expect(findByText('Smartwatch')).toBeInTheDocument());
  });
});
