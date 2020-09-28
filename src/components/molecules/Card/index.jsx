import React from 'react';
import Button from '../../atoms/Button'
import { StyledCard, Overlay, Title, Subtitle, HighLowInfo, Main, MainInfo } from './style';
import PropTypes from 'prop-types';

const Card = ({city, closeCard, high, low}) => {
  return (
    <>
    <StyledCard>
      {console.log(city)}
      <Title>
        <span>{city.name}</span>
        <Button type="icon" clickFn={closeCard} />
      </Title>
      <Subtitle>
        <span>{`${Math.round(city.main.temp)}°C`}</span>
        <HighLowInfo>
          <small>H:{city.main.temp_max}°C L:{city.main.temp_min}°C</small>
          <small></small>
        </HighLowInfo>
      </Subtitle>
      <Main>
        <span>{`Today: ${city.weather[0].description}. The high will be ${city.main.temp_max}°C with a low of ${city.main.temp_min}°C.`}</span>
        <MainInfo>
          <span>Wind</span>
          <span>{city.wind.speed} km/h</span>
        </MainInfo>
        <MainInfo>
          <span>Feels like</span>
          <span>{city.main.feels_like}°C</span>
        </MainInfo>
        <MainInfo>
          <span>Humidity</span>
          <span>{city.main.humidity}%</span>
        </MainInfo>
        <MainInfo>
          <span>Pressure</span>
          <span>{city.main.pressure} hPa</span>
        </MainInfo>
      </Main>
    </StyledCard>
    <Overlay onClick={closeCard}/>
    </>
  )
}

Card.propTypes = {
  city: PropTypes.object, 
  closeCard: PropTypes.func, 
}

Card.defaultProps = {
  city: {}, 
  closeCard: () => {}, 
}

export default Card;