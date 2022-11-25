import PropTypes from 'prop-types';
import { ProfileItems } from 'components/ProfileItem/ProfileItem';
import {
  ProfileCard,
  ProfileName,
  ProfileAvatar,
  ProfileDescription,
} from './Profile.styled';
import { Box } from 'components/Box';

export function Profile({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileCard>
      <Box p={30}>
        <ProfileAvatar src={avatar} alt="User avatar" width="100px" />
        <ProfileName>{name}</ProfileName>
        <ProfileDescription>@{tag}</ProfileDescription>
        <ProfileDescription>{location}</ProfileDescription>
      </Box>
      <Box display="flex">
        <ProfileItems quantity={followers}>Followers</ProfileItems>
        <ProfileItems quantity={views}>Views</ProfileItems>
        <ProfileItems quantity={likes}>Likes</ProfileItems>
      </Box>
    </ProfileCard>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
