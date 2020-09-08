import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { graphql } from '@apollo/react-hoc';
import { createOrder } from '../../graphql/Mutations';
import { getProduct } from '../../graphql/Queries';

import { currencyFormatter } from '../../util/util';
import Context from '../../context';
import {
  setCustomerName,
  setCreditCard,
  orderCreated,
} from '../../actionCreators';

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

    &:disabled {
      cursor: not-allowed;
    }
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
      refetchQueries: [{ query: getProduct }],
    }).then(
      res => {
        dispatch(orderCreated());
        const { data } = res;
        alert(`Order ${data.createOrder} created sucessfully.`);
      },
      err => {
        alert(`Oooops! ${err.message} :/`);
      }
    );
  };

  const isEmpty = str => str.length === 0 || !str.trim();
  const isCreditCardPresent = state => !isEmpty(state.cart.creditCard);
  const isCustomerPresent = state => !isEmpty(state.cart.customer);
  const isRequiredInfo = state =>
    isCreditCardPresent(state) && isCustomerPresent(state);

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
        <button disabled={!isRequiredInfo(state)} onClick={handleConfirm}>
          Confirm
        </button>
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
