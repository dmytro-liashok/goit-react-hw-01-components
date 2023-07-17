import StatisticsTitle from './StatisticsTitle/StatisticsTitle';
import StatisticsList from './StatisticsList/StatisticsList';

import css from './Statistic.module.css';

const Statistics = props => {
  return (
    <section className={css.section}>
      <StatisticsTitle title={props.title} />
      <StatisticsList dataArray={props.data} />
    </section>
  );
};
export default Statistics;
