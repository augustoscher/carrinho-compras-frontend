import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { currencyFormatter } from '../../util/util';

const Img = styled.img`
  width: 80px;
  height: 80px;
`;

const Root = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: block;
  padding: 8px;

  p {
    margin: 0;
  }
`;

const CartItem = ({ name, photo, price, qtd }) => (
  <Root>
    <Img src={photo} />
    <Content>
      <p>{name}</p>
      <p>{`${currencyFormatter(price)} x ${qtd} = ${currencyFormatter(
        price * qtd
      )}`}</p>
    </Content>
  </Root>
);

CartItem.defaultProps = {
  name: '',
  photo: '',
  price: 0,
  qtd: 0,
};

CartItem.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.number,
  qtd: PropTypes.number,
};

export default CartItem;
