import styled from 'styled-components';

export const StyledSearchButton = styled.button`
  width: 40%;
  display: block;
  padding: 0.7em;
  margin: 0.5em auto;
  border: none;
  border-radius: 0.5em;
  font-size: 1em;
  font-weight: bold;
  color: #fff;
  background-color: #34c240;
  text-align: center;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 20%;
  }

  @media (min-width: 1024px) {
    width: 10%;
  }
`

export const StyledCityButton = styled.button`
  width: 95%;
  display: block;
  height: 60px;
  border: none;
  appearance: none;
  background-color: #fff;
  font-size: 1.2em;
  color: grey;
  border: none;
  border-radius: 5px;
  margin: 0.5em auto;
  text-align: left;
  cursor: pointer;
  box-shadow: 1px 1px 2px 0px #dedede;
  transition: .2s ease all;

  &:hover {
    box-shadow: 1px 1px 3px 1px #dedede;
  }
`

export const StyledIconButton = styled.button`
width: 30px;
height: 30px;
border: none;
background-color: transparent;
`