import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  width: 55px;
  height: 55px;
`;

const CartItem = ({ name, photo, price }) => (
  <>
    <Img src={photo} />
    <p>{name}</p>
    <p>{price}</p>
  </>
);

CartItem.defaultProps = {
  name: '',
  photo: '',
  price: 0,
};

CartItem.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.number,
};

export default CartItem;
