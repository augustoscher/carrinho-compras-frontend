import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartIem/CartItem';
import PaymentInfo from './PaymentInfo';
import Context from '../../context';
import styled from 'styled-components';

const Root = styled.div`
  display: block;
  padding: 20px;
  width: 100%;
`;

const Header = styled.div`
  text-align: center;
`;

const Cart = ({ title }) => {
  const { state } = useContext(Context);
  const { cart } = state;

  if (state && cart.products.length > 0) {
    return (
      <Root>
        <Header>
          <h1>{title}</h1>
        </Header>

        {cart.products.map(p => (
          <CartItem
            key={p.id}
            id={p.id}
            name={p.name}
            photo={p.photo}
            price={p.price}
            qtd={p.qtd}
            total={p.total}
          />
        ))}
        <PaymentInfo total={cart.total} />
      </Root>
    );
  }
  return (
    <Root>
      <Header>
        <h1>{title}</h1>
      </Header>
    </Root>
  );
};

Cart.defaultProps = {
  title: '',
};

Cart.propTypes = {
  title: PropTypes.string,
};

export default Cart;
