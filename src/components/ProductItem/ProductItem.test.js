import React from 'react';
import { render } from '@testing-library/react';
import ProductItem from './ProductItem';

describe('ProductItem', () => {
  test('match snapshot', () => {
    const { asFragment } = render(<ProductItem />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders button', () => {
    const { getByText } = render(<ProductItem />);

    expect(getByText('Add to Cart')).toBeInTheDocument();
  });
});
