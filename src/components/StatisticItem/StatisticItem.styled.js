import styled from 'styled-components';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5);
  gap: 3px;

  padding: 5px 0;

  color: #c0bdbd;
  background-color: ${p => getRandomHexColor()};
`;

export const StatLabel = styled.span`
  font-size: 10px;
`;
