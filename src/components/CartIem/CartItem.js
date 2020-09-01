import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { currencyFormatter } from '../../util/util';

const Img = styled.img`
  width: 95px;
  height: 95px;
`;

const Root = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: block;
  padding: 16px;

  p {
    margin: 0;
  }
`;

const CartItem = ({ name, photo, price, qtd, total }) => (
  <Root>
    <Img src={photo} />
    <Content>
      <p>{`${qtd}x ${name}`}</p>
      <p>{`Price: ${currencyFormatter(price)}`}</p>
      <p>{`Total: ${currencyFormatter(total)}`}</p>
    </Content>
  </Root>
);

CartItem.defaultProps = {
  name: '',
  photo: '',
  price: 0,
  qtd: 0,
  total: 0,
};

CartItem.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.number,
  qtd: PropTypes.number,
  total: PropTypes.number,
};

export default CartItem;
