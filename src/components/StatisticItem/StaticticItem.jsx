import PropTypes from 'prop-types';
import { StatItem, StatLabel } from './StatisticItem.styled';

export function StatisticItem({ label, percentage }) {
  return (
    <StatItem>
      <StatLabel>{label}</StatLabel>
      <span>{percentage}%</span>
    </StatItem>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
