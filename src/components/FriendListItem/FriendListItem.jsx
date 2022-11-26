import { ListItem } from './FriendListItem.styled';
import { StatusCircle } from './FriendListItem.styled';

export function FriendListItem({ avatar, name, status }) {
  return (
    <ListItem className="item">
      <StatusCircle className="status"></StatusCircle>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </ListItem>
  );
}
