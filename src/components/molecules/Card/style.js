import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 100vw;
  height: 100vh;
  border-radius: 4px;
  border: 1px solid grey;
  background-color: #90b8cf;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  
  .title {
    font-size: 1.7em;
    font-weight: 500;
    text-align: center;
    position: relative;
    color: white;

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
        font-size: 1.5em;
        color: white;
      }
    }
  }
`