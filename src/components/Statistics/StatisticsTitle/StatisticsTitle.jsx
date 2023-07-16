import PropTypes from 'prop-types';
import css from './StatisticsTitle.module.css';

const StatisticsTitle = ({ title }) => {
  return <>{title && <h2 className={css.title}>{title}</h2>}</>;
};

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};

export default StatisticsTitle;
