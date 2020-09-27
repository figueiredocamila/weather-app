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

export const NotFoundMsg = styled.span`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
`