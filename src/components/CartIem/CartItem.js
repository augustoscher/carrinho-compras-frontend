import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  width: 55px;
  height: 55px;
`;

const CartItem = ({ name, photo, price, qtd }) => (
  <>
    <Img src={photo} />
    <p>{`${name} - ${price} - ${qtd}`}</p>
  </>
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
