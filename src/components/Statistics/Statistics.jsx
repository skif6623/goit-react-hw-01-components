import { StatisticItem } from 'components/StatisticItem/StaticticItem';
import { Section, StatisticTitle } from './Statistics.styled';
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
        <StatisticTitle className="title">{title}</StatisticTitle>
      </Box>

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticItem key={id} label={label} percentage={percentage} />
          );
        })}
      </ul>
    </Section>
  );
}
