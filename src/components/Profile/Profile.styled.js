import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  /* padding: 30px; */
  width: 300px;
  height: 400px;
  border: 2px solid grey;
  border-radius: 8px;
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
