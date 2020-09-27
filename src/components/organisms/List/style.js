import styled from 'styled-components';

export const StyledList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  & > button:last-child {
    flex: 1;
  }
`