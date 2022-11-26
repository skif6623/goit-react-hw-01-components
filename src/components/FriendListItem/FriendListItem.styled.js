import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  width: 270px;

  margin-bottom: 5px;
  padding: 5px 10px;

  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.22);
`;

export const StatusCircle = styled.span`
  display: block;

  width: 20px;
  height: 20px;

  background-color: green;
  border-radius: 50%;
`;
