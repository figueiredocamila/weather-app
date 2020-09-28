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
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  border: none;
  appearance: none;
  background-color: #fff;
  font-size: 1.2em;
  color: grey;
  border: none;
  border-radius: 5px;
  margin: 0.5em;
  text-align: left;
  cursor: pointer;
  box-shadow: 1px 1px 2px 0px #dedede;
  transition: .2s ease all;

  &:hover {
    box-shadow: 1px 1px 3px 1px #dedede;
  }

  @media (min-width: 768px) {
    width: calc(50% - 1em);
  }

  @media (min-width: 1024px) {
    width: calc((100% / 3) - 1em);
  }
`

export const StyledIconButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`