import React from 'react';
import ActionBar from './components/ActionBar/ActionBar';
import CardButton from './components/ActionBar/CardButton';
import styled from 'styled-components';
import ProductList from './components/ProductList/ProductList';

const Content = styled.div`
  padding: 20px;
  display: flex;
  height: 100%;
`;

const ListContainer = styled.div`
  padding: 20px;
  width: 70%;
`;

const OrderContainer = styled.div`
  width: 30%;
  padding: 20px;
`;

function App() {
  return (
    <>
      <ActionBar>
        <CardButton text="Items" value="9" />
      </ActionBar>
      <Content>
        <ListContainer>
          <ProductList />
        </ListContainer>
        <OrderContainer>Order</OrderContainer>
      </Content>
    </>
  );
}

export default App;
