import React, {useReducer} from 'react';
import Button from '../../atoms/Button'
import Card from '../../molecules/Card'
import PropTypes from 'prop-types';
import { StyledList, NotFoundMsg, MoreDetails } from './style';

const List = ({cities}) => {

  const initialState = {
    selectedCity: undefined, 
    isCardOpen: false
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'toogleModal':
        return {
          ...state, 
          isCardOpen: !state.isCardOpen
        };
      case 'setSelectedCity':
        return {
          ...state,
          selectedCity: action.city
        };
      case 'clearSelectedCity':
        return {
          ...state, 
          selectedCity: undefined
        };
      default:
        throw new Error();

    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <>
      {cities.length === 0 && <NotFoundMsg>Nearby cities not found, try another location.</NotFoundMsg>}
      {cities.length > 0 && 
      <StyledList>
        {cities.map(city => 
          <Button key={city.id} type="city" clickFn={() => {
            dispatch({type: 'toogleModal'});
            dispatch({type: 'setSelectedCity', city})
          }}>
            {city.name}
            <MoreDetails>Details</MoreDetails>
          </Button>
        )}
      </StyledList>}
      
      {state.isCardOpen && <Card 
        city={state.selectedCity}
        closeCard={() => {
          dispatch({type: 'toogleModal'});
          dispatch({type: 'clearSelectedCity'})
        }}
      />}
    </>
  )
}

List.propTypes = {
  cities: PropTypes.array,
}

List.defaultProps = {
  cities: [],
}

export default List;