import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
  background-color: #282c34;
  padding: 15px 15px;
  background-position: center;
  text-align: right;
  max-height: 50px;
`;

const Container = styled.div`
  width: 100%;
`;

const ActionBar = ({ children }) => (
  <Root>
    <Container>{children}</Container>
  </Root>
);

ActionBar.protoTypes = {
  children: PropTypes.node,
};

export default ActionBar;
