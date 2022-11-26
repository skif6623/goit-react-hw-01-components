import styled from 'styled-components';

export const Row = styled.tr`
  background-color: ${({ index }) => (index % 2 === 0 ? 'white' : '#e9e9e9')};
`;

export const Data = styled.td`
  padding: 15px 50px;

  text-align: center;

  color: grey;
  border: 1px solid grey;

  ::first-letter {
    text-transform: uppercase;
  }
`;
