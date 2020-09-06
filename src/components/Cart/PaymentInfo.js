import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import { createOrder } from '../../graphql/Mutations';

import { currencyFormatter } from '../../util/util';
import Context from '../../context';
import { setCustomerName, setCreditCard } from '../../actionCreators';

const Root = styled.div`
  padding: 0 40px 0 0;
`;

const Payment = styled.div`
  display: block;
  margin-bottom: 8px;

  button {
    font-weight: 600;
    padding: 8px 32px;
    cursor: pointer;
    color: #4d4d4d;
    margin-top: 8px;
  }
`;

const PaymentLine = styled.div`
  margin-bottom: 8px;

  p {
    margin-block-end: 0.3em;
  }

  input {
    width: 100%;
    height: 20px;
  }
`;

const PaymentInfo = ({ total, mutate }) => {
  const { state, dispatch } = useContext(Context);

  const handleConfirm = evt => {
    evt.preventDefault();

    mutate({
      variables: {
        order: {
          ...state.cart,
        },
      },
    }).then(res => {
      console.log('res', res);
    });
  };

  return (
    <Root>
      <h3>
        <strong>Total: {currencyFormatter(total)}</strong>
      </h3>
      <Payment>
        <PaymentLine>
          <p htmlFor="customer">Customer:</p>
          <input
            type="text"
            name="customer"
            onChange={e => dispatch(setCustomerName(e.target.value))}
          />
        </PaymentLine>
        <PaymentLine>
          <p htmlFor="card">Credit Card:</p>
          <input
            type="number"
            name="card"
            onChange={e => dispatch(setCreditCard(e.target.value))}
          />
        </PaymentLine>
        <button onClick={handleConfirm}>Confirm</button>
      </Payment>
    </Root>
  );
};

PaymentInfo.defaultProps = {
  total: 0,
};

PaymentInfo.propTypes = {
  total: PropTypes.number,
};

export default graphql(createOrder)(PaymentInfo);
