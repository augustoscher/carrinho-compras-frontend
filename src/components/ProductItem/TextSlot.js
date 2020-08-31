import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
  padding: 10px 30px;

  p {
    font-size: 20px;
    font-weight: 500;
    margin-top: 8px;
  }

  span {
    color: #7c7e83;
  }
`;

const TextSlot = ({ label, text }) => (
  <Root>
    <span>{label}</span>
    <p>
      <strong>{text}</strong>
    </p>
  </Root>
);

TextSlot.defaultProps = {
  label: '',
  text: '',
};

TextSlot.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
};

export default TextSlot;
