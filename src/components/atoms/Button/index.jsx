import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { StyledSearchButton, StyledCityButton, StyledIconButton } from './style';

const Button = props => {
  return (
    <>
      {props.type === 'search' && <StyledSearchButton onClick={() => props.search()}>Search</StyledSearchButton>}
      {props.type === 'city' && <StyledCityButton onClick={() => props.showMoreInfo()}>{props.text}</StyledCityButton>}
      {props.type === 'icon' && <StyledIconButton onClick={() => props.close()}>
        <FontAwesomeIcon icon={faTimes} size="2x" color="red" /> 
      </StyledIconButton>}
    </>
  )
}

export default Button;