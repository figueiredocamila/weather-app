import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 90%;
  height: 150px;
  padding: 10px;
  position: fixed;
  top: calc(50% - (150px / 2));
  left: calc(50% - (90% / 2));
  z-index: 1;
  border: none;
  appearance: none;
  background-color: #fff;
  color: grey;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0px #dedede;
  transition: .2s ease all;
  
  .title {
    color: green;
    font-size: 1.4em;
    font-weight: 500;
    text-align: center;
    position: relative;

    button {
      position: absolute;
      right: 0px;
      top: 0px;
    }
  }

  .temp {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 5px;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1em;
      }
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    left: calc(50% - (50% / 2));
  }

  @media (min-width: 1024px) {
    width: 30%;
    left: calc(50% - (30% / 2));
  }

  @media (min-width: 1366px) {
    width: 20%;
    left: calc(50% - (20% / 2));
  }
`

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
`