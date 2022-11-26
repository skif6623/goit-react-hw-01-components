import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 500px;
  height: 300px;

  margin: 0 auto;
  margin-top: 50px;

  border: 1px solid grey;
  border-radius: 3px;

  overflow: hidden;
`;

export const StatTitle = styled.h2`
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
`;
