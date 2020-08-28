import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: #ffc107;
  border: 2px solid #ffc107;
  color: #4d4d4d;

  &:hover:enabled {
    background-color: #c79100;
    border-color: #c79100;
  }
`;

const CardButton = ({ value, text }) => <Button>{`${text}: ${value}`}</Button>;

CardButton.propTypes = {
  value: PropTypes.string,
  text: PropTypes.string,
};

export default CardButton;
