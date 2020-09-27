import styled from 'styled-components';

export const StyledSearchButton = styled.button`
  width: 60%;
  display: block;
  padding: 0.7em;
  margin: 0.5em auto;
  border: none;
  border-radius: 5em;
  font-size: 1em;
  font-weight: bold;
  color: #fff;
  background-color: #34c240;
  text-align: center;

  @media (min-width: 768px) {
    width: 30%;
  }

  @media (min-width: 1024px) {
    width: 20%;
  }
`

export const StyledCityButton = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  border: 1px solid grey;
  font-size: 2em;
  color: grey;
  text-align: justify;
  background-color: white;
`

export const StyledIconButton = styled.button`
width: 30px;
height: 30px;
border: none;
background-color: transparent;
`