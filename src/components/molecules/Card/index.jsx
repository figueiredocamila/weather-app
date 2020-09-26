import React from 'react';
import Button from '../../atoms/Button'
import { StyledCard } from './style';

const Card = props => {
  return (
    <>
    <StyledCard>
      <div className="title">
        <span>{props.city}</span>
        <Button type="icon" onclick={props.closeCard} />
      </div>
      <div className="temp">
        <div>
          <span>Max</span>
          <span>{props.high}°C</span>
        </div>
        <div>
          <span>Min</span>
          <span>{props.low} °C</span>
        </div> 
      </div>
    </StyledCard>
    </>
  )
}

export default Card;