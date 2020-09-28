import styled from 'styled-components';

export const StyledList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  @media(min-width: 1366px) {
    width: 1200px;
    margin: 0 auto;
  }

  & > button:last-child {
    flex: 1;
  }
`

export const Msg = styled.div`
  max-width: 100vw;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  text-align: center;
  color: grey;
`

export const MoreDetails = styled.span`
  color: grey;
  font-size: 1.3em
`