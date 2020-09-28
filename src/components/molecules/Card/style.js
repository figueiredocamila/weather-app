import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 90%;
  padding: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border: none;
  appearance: none;
  background-color: #fff;
  color: grey;
  border: none;
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 50%; 
  }

  @media (min-width: 1024px) {
    width: 30%;
  }

  @media (min-width: 1366px) {
    width: 20%;
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

export const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5em;

  & span {
    font-size: 40px;
  }
`

export const HighLowInfo = styled.div`
`

export const Title = styled.div`
  color: green;
  font-size: 1.4em;
  font-weight: 500;
  text-align: center;
  position: relative;

  & button {
    position: absolute;
    right: 0px;
    top: 0px;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: .5em;

  & span {
    padding-bottom: 1em;
  }
`
export const MainInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;

  & span {
    padding-bottom: 0.5em;
  }
}
`