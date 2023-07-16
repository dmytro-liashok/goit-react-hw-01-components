import PropTypes from 'prop-types';

import FriendItem from './FriendItem/FriendItem';

import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friendObj => (
        <li key={friendObj.id} className={css.item}>
          <FriendItem
            avatar={friendObj.avatar}
            name={friendObj.name}
            isOnline={friendObj.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
