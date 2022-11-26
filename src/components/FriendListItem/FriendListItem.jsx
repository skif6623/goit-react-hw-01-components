import PropTypes from 'prop-types';
import { ListItem, StatusCircle, Name } from './FriendListItem.styled';

export function FriendListItem({ avatar, name, status }) {
  return (
    <ListItem>
      <StatusCircle status={status}></StatusCircle>
      <img src={avatar} alt="User avatar" width="60" />
      <Name>{name}</Name>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
