import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RemovableButton from '../RemovableButton/RemovableButton';

const Root = styled.div`
  position: relative;
`;

const RemovableContainer = ({ onRemove, children }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Root
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(!hovered)}
    >
      {children}
      {hovered && <RemovableButton visible={true} onClick={onRemove} />}
    </Root>
  );
};

RemovableContainer.propTypes = {
  onRemove: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default RemovableContainer;
