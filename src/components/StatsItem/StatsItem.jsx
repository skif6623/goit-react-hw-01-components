import { Item } from './StatsItem.styled';

export function StatsItems({ children, quantity }) {
  return (
    <Item>
      <span>{children}</span>
      <span>{quantity}</span>
    </Item>
  );
}
