import { StatItem, StatLabel } from './StatisticItem.styled';

export function StatisticItem({ label, percentage }) {
  return (
    <StatItem>
      <StatLabel className="label">{label}</StatLabel>
      <span className="percentage">{percentage}%</span>
    </StatItem>
  );
}
