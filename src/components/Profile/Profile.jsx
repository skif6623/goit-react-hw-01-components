import { StatsItems } from '../StatsItem/StatsItem';
import { ListItem } from 'components/StatsItem/StatsItem.styled';
import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileName,
  ProfileAvatar,
  ProfileDescription,
  DescriptionWrap,
} from './Profile.styled';

export function Profile({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileCard>
      <DescriptionWrap>
        <ProfileAvatar src={avatar} alt="User avatar" width="100px" />
        <ProfileName>{name}</ProfileName>
        <ProfileDescription>@{tag}</ProfileDescription>
        <ProfileDescription>{location}</ProfileDescription>
      </DescriptionWrap>
      <ListItem>
        <StatsItems quantity={followers}>Followers</StatsItems>
        <StatsItems quantity={views}>Views</StatsItems>
        <StatsItems quantity={likes}>Likes</StatsItems>
      </ListItem>
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
