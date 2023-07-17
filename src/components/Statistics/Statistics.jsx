import StatisticsTitle from './StatisticsTitle/StatisticsTitle';
import StatisticsList from './StatisticsList/StatisticsList';

import css from './Statistic.module.css';

import data from 'data.json';

const Statistics = () => {
  return (
    <section className={css.section}>
      <StatisticsTitle title="Upload stats" />
      <StatisticsList dataArray={data} />
    </section>
  );
};

export default Statistics;
