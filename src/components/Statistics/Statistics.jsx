import PropTypes from 'prop-types';
import { StatisticItem } from 'components/StatisticItem/StaticticItem';
import { Section, StatTitle, StatList } from './Statistics.styled';
import { Box } from 'components/Box';

export function Statistics({ title, stats }) {
  return (
    <Section>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={90}
        bg="white"
      >
        <StatTitle>{title}</StatTitle>
      </Box>

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticItem key={id} label={label} percentage={percentage} />
          );
        })}
      </StatList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
