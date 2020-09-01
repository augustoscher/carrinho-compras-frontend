/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
  position: absolute;
  top: -10px;
  right: -12px;
  font-size: 18px;
  color: #777;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  overflow: hidden;
  border-radius: 50%;
  outline: none;
`;

const RemoveButton = ({ visible, onClick }) => (
  <Root>
    {visible && (
      <Button onClick={onClick}>
        <i className="fas fa-times-circle" aria-hidden="true"></i>
      </Button>
    )}
  </Root>
);

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default RemoveButton;
