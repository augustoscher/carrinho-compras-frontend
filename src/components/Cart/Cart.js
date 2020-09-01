import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartIem/CartItem';
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

  if (state) {
    return (
      <Root>
        <Header>
          <h1>{title}</h1>
        </Header>

        {state.cart &&
          state.cart.products.map(p => (
            <CartItem
              key={p.id}
              name={p.name}
              photo={p.photo}
              price={p.price}
              qtd={p.qtd}
            />
          ))}
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
