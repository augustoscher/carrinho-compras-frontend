import React, { useContext, useReducer } from 'react';
import styled from 'styled-components';

import ActionBar from './components/ActionBar/ActionBar';
import CardButton from './components/ActionBar/CardButton';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';

import Context from './context';
import reducer from './reducer';

const Content = styled.div`
  padding: 20px;
  display: flex;
  height: 100%;
`;

const ListContainer = styled.div`
  width: 65%;
`;

const CartContainer = styled.div`
  width: 35%;
  margin-left: 8px;
  /* padding: 20px; */
  border: 1px solid #d7dff0;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  background: #fbfcff;
  display: flex;
`;

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ActionBar>
        <CardButton text="Items" value="0" />
      </ActionBar>
      <Content>
        <ListContainer>
          <ProductList />
        </ListContainer>
        <CartContainer>
          <Cart title="Cart Items" />
        </CartContainer>
      </Content>
    </Context.Provider>
  );
}

export default App;
