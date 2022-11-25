import PropTypes from 'prop-types';
import { Item, ItemText, ItemNumber } from './ProfileItem.styled';

export function ProfileItems({ children, quantity }) {
  return (
    <Item>
      <ItemText>{children}</ItemText>
      <ItemNumber>{quantity}</ItemNumber>
    </Item>
  );
}

ProfileItems.propTypes = {
  quantity: PropTypes.number,
};
