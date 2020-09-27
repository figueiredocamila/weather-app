import React from 'react';
import Button from '../../atoms/Button'
import { StyledCard, Overlay } from './style';

const Card = props => {
  return (
    <>
    <StyledCard>
      <div className="title">
        <span>{props.city}</span>
        <Button type="icon" close={props.closeCard} />
      </div>
      <div className="temp">
        <div>
          <span>Maximum</span>
          <span>{props.high}°C</span>
        </div>
        <div>
          <span>Minimum</span>
          <span>{props.low}°C</span>
        </div> 
      </div>
    </StyledCard>
    <Overlay onClick={props.closeCard}/>
    </>
  )
}

export default Card;