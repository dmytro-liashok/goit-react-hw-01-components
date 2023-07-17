import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import css from './StatisticsList.module.css';

const StatisticsList = ({ dataArray }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <ul className={css.statList}>
      {dataArray.map(dataObj => (
        <li
          className={css.item}
          key={dataObj.id}
          style={{ backgroundColor: getRandomColor() }}
        >
          <StatisticsItem
            label={dataObj.label}
            percentage={dataObj.percentage}
          />
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  dataArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticsList;
