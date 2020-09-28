import React from 'react';
import Button from '../../atoms/Button'
import { StyledCard, Overlay } from './style';
import PropTypes from 'prop-types';

const Card = ({city, closeCard, high, low}) => {
  return (
    <>
    <StyledCard>
      <div className="title">
        <span>{city}</span>
        <Button type="icon" clickFn={closeCard} />
      </div>
      <div className="temp">
        <div>
          <span>Maximum</span>
          <span>{high}°C</span>
        </div>
        <div>
          <span>Minimum</span>
          <span>{low}°C</span>
        </div> 
      </div>
    </StyledCard>
    <Overlay onClick={closeCard}/>
    </>
  )
}

Card.propTypes = {
  city: PropTypes.string, 
  closeCard: PropTypes.func, 
  high: PropTypes.number, 
  low: PropTypes.number
}

Card.defaultProps = {
  city: "", 
  closeCard: () => {}, 
  high: 0,
  low: 0
}

export default Card;