import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  padding: 10px 0px 10px 25px;

  p {
    font-size: 20px;
    font-weight: 500;
    margin-top: 8px;
  }

  span {
    color: #7c7e83;
  }
`;

const ProductItem = ({ id, name, photo, price, stock }) => (
  <Container>
    <Img src={photo} />
    <Content>
      <Slot>
        <span>Cod: {id}</span>
        <p>
          <strong>{name}</strong>
        </p>
      </Slot>
      <Slot>
        <span>Price:</span>
        <p>
          <strong>{price}</strong>
        </p>
      </Slot>
      <Slot>
        <span>Stock:</span>
        <p>
          <strong>{stock}</strong>
        </p>
      </Slot>
    </Content>
  </Container>
);

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
