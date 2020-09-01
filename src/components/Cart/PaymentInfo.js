import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { currencyFormatter } from '../../util/util';

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

const PaymentInfo = ({ total }) => {
  return (
    <Root>
      <h3>
        <strong>Total: {currencyFormatter(total)}</strong>
      </h3>
      <Payment>
        <PaymentLine>
          <p htmlFor="customer">Customer:</p>
          <input type="text" name="customer" />
        </PaymentLine>
        <PaymentLine>
          <p htmlFor="card">Credit Card:</p>
          <input type="text" name="card" />
        </PaymentLine>
        <button>Confirm</button>
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

export default PaymentInfo;
