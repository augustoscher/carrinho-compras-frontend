import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { currencyFormatter } from '../../util/util';

import RemovableContainer from '../RemovableContainer/RemovableContainer';
import Context from '../../context';
import {
  addToCart,
  removeFromCart,
  decrementStock,
  incrementStock,
  removeQtdFromProductCart,
} from '../../actionCreators';

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

const Button = styled.button`
  margin: 6px 0 0 8px;
  font-weight: 600;
  padding: 2px 8px;
  cursor: pointer;
  color: #4d4d4d;

  &:disabled {
    cursor: not-allowed;
  }
`;

const CartItem = ({ id, name, photo, price, qtd, total, stock }) => {
  const { dispatch } = useContext(Context);
  const handleRemove = () => {
    dispatch(incrementStock({ id, qtd }));
    dispatch(removeFromCart({ id, total }));
  };

  const addProduct = () => {
    dispatch(decrementStock(id));
    dispatch(addToCart({ id, name, photo, price }));
  };

  const removeProduct = () => {
    dispatch(incrementStock({ id, qtd: 1 }));
    dispatch(removeQtdFromProductCart({ id, price }));
  };

  return (
    <RemovableContainer onRemove={handleRemove}>
      <Root>
        <Img src={photo} />
        <Content>
          <p>{`${qtd}x ${name}`}</p>
          <p>{`Price: ${currencyFormatter(price)}`}</p>
          <p>{`Total: ${currencyFormatter(total)}`}</p>
          <Button disabled={stock === 0} onClick={addProduct}>
            +1
          </Button>
          <Button disable={!qtd > 0} onClick={removeProduct}>
            -1
          </Button>
        </Content>
      </Root>
    </RemovableContainer>
  );
};

CartItem.defaultProps = {
  id: '',
  name: '',
  photo: '',
  price: 0,
  qtd: 0,
  total: 0,
  stock: 0,
};

CartItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.number,
  qtd: PropTypes.number,
  total: PropTypes.number,
  stock: PropTypes.number,
};

export default CartItem;
