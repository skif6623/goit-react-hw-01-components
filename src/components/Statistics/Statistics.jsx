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
        <StatTitle className="title">{title}</StatTitle>
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
