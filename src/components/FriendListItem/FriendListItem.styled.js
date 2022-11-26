import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 270px;

  margin-bottom: 5px;
  padding: 5px 15px;

  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.22);
`;

export const StatusCircle = styled.span`
  display: block;

  width: 15px;
  height: 15px;

  background-color: ${({ status }) => (status ? 'green' : 'red')};
  border-radius: 50%;
`;
