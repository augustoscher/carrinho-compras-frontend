import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import App from './App';

describe('App', () => {
  test('match snapshot', () => {
    const { asFragment } = render(
      <MockedProvider mocks={[]}>
        <App />
      </MockedProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
