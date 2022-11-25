import { Item, ItemText, ItemNumber } from './StatsItem.styled';

export function StatsItems({ children, quantity }) {
  return (
    <Item>
      <ItemText>{children}</ItemText>
      <ItemNumber>{quantity}</ItemNumber>
    </Item>
  );
}
