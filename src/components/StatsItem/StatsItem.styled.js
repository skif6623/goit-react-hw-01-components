import styled from 'styled-components';

export const ListItem = styled.ul`
  display: flex;
`;

export const Item = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  width: 90px;
  padding: 20px;
  background-color: #e0e0e0;
  outline: 1px solid grey;
`;

export const ItemText = styled.div`
  color: grey;
  font-size: 12px;
`;

export const ItemNumber = styled.div`
  font-weight: 500;
`;
