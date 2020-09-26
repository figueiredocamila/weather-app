import React, {useReducer} from 'react';
import Button from '../../atoms/Button'
import Card from '../../molecules/Card'
import { StyledList } from './style';

const List = props => {

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
    <StyledList>
      {props.cities.map(city => <Button key={city.id} type="city" text={city.name} onclick={() => {
        dispatch({type: 'toogleModal'});
        dispatch({type: 'setSelectedCity', city})
      }}/>)}
    </StyledList>
    {state.isCardOpen && <Card 
      city={state.selectedCity.name} 
      high={state.selectedCity.main.temp_max}
      low={state.selectedCity.main.temp_min}
      closeCard={() => {
        dispatch({type: 'toogleModal'});
        dispatch({type: 'clearSelectedCity'})
      }}
    />}
    </>
  )
}

export default List;