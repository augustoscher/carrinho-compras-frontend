import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { currencyFormatter } from '../../util/util';

import RemovableContainer from '../RemovableContainer/RemovableContainer';
import Context from '../../context';

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

const CartItem = ({ id, name, photo, price, qtd, total }) => {
  const { dispatch } = useContext(Context);
  const handleRemove = () => {
    dispatch({
      type: 'INCREMENT_STOCK',
      payload: { id, qtd },
    });
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id, total },
    });
  };

  return (
    <RemovableContainer onRemove={handleRemove}>
      <Root>
        <Img src={photo} />
        <Content>
          <p>{`${qtd}x ${name}`}</p>
          <p>{`Price: ${currencyFormatter(price)}`}</p>
          <p>{`Total: ${currencyFormatter(total)}`}</p>
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
};

CartItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.number,
  qtd: PropTypes.number,
  total: PropTypes.number,
};

export default CartItem;
