import React from 'react';
import ProductList from './ProductList';
import { getProduct } from '../../graphql/Queries';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

describe('ProductList', () => {
  test('should render product list on load', async () => {
    const mocks = [
      {
        request: {
          query: getProduct,
        },
        result: {
          data: {
            getProduct: [
              {
                id: '1',
                name: 'Smartwatch',
                photo: 'photo',
                price: 1999.99,
                stock: 1,
              },
            ],
          },
        },
      },
    ];

    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );

    expect(getByText('Loading...')).toBeInTheDocument();

    await new Promise(resolve => setTimeout(resolve, 0));

    expect(getByText('Smartwatch')).toBeInTheDocument();
  });

  test('should show error message', async () => {
    const mocks = [
      {
        request: {
          query: getProduct,
        },
        error: new Error(':('),
      },
    ];

    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );

    await new Promise(resolve => setTimeout(resolve, 0));

    expect(getByText('Error :(')).toBeInTheDocument();
  });
});
