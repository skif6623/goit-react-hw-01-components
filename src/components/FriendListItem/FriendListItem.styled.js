import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 30px;

  width: 500px;

  margin-bottom: 15px;
  padding: 15px 25px;

  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.22);
`;

export const StatusCircle = styled.span`
  display: block;

  width: 25px;
  height: 25px;

  background-color: ${({ status }) => (status ? 'green' : 'red')};
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 30px;
  font-weight: 500;
`;
