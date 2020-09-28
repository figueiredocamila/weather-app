import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { StyledSearchButton, StyledCityButton, StyledIconButton } from './style';
import PropTypes from 'prop-types';

const Button = ({type, clickFn, children}) => {
  return (
    <>
      {type === 'search' && <StyledSearchButton onClick={clickFn}>{children}</StyledSearchButton>}
      {type === 'city' && <StyledCityButton onClick={clickFn}>
        {children} 
      </StyledCityButton>}
      {type === 'icon' && <StyledIconButton onClick={clickFn}>
        <FontAwesomeIcon icon={faTimes} size="2x" color="red" /> 
      </StyledIconButton>}
    </>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  clickFn: PropTypes.func,
}

Button.defaultProps = {
  type: '',
  clickFn: () => {},
}

export default Button;