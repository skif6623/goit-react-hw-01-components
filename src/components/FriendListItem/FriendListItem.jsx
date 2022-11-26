import PropTypes from 'prop-types';
import { ListItem } from './FriendListItem.styled';
import { StatusCircle } from './FriendListItem.styled';

export function FriendListItem({ avatar, name, status }) {
  return (
    <ListItem>
      <StatusCircle status={status}></StatusCircle>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
