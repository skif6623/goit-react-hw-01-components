import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 20px;
  width: 270px;
  height: 360px;
  border: 2px solid grey;
  border-radius: 8px;
  overflow: hidden;
`;

export const DescriptionWrap = styled.div`
  padding: 30px;
`;

export const ProfileAvatar = styled.img`
  display: block;
  margin: 0 auto;
  background-color: red;
  text-align: center;
  border: 2px solid black;
  border-radius: 50%;
`;

export const ProfileName = styled.div`
  margin-top: 20px;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
`;

export const ProfileDescription = styled.div`
  margin-top: 10px;
  color: grey;
  text-align: center;
`;
