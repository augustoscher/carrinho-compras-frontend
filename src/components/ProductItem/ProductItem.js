import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Context from '../../context';

import TextSlot from './TextSlot';

const Container = styled.div`
  border: 1px solid #d7dff0;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 6px 12px;
  background: #fbfcff;
  display: flex;
  margin-bottom: 8px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Content = styled.div`
  display: flex;
`;

const Slot = styled.div`
  padding: 10px 30px;

  button {
    margin: 25px;
    width: 120px;
    height: 30px;
  }
`;

const ProductItem = ({ id, name, photo, price, stock }) => {
  const { dispatch } = useContext(Context);
  const handleClick = () => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: [{ id, name, photo, price, stock }],
    });
  };

  return (
    <Container>
      <Img src={photo} />
      <Content>
        <TextSlot label={`Cod: ${id}`} text={name} />
        <TextSlot label="Price:" text={price} />
        <TextSlot label="Stock:" text={stock} />
        <Slot>
          <button onClick={handleClick}>Add to Cart</button>
        </Slot>
      </Content>
    </Container>
  );
};

ProductItem.defaultProps = {
  id: '',
  name: '',
  photo: '',
  price: 0,
  stock: 0,
};

ProductItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
};

export default ProductItem;
