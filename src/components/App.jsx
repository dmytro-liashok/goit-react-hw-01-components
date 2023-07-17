import userObject from 'user.json';
import friendArray from 'friends.json';
import transactionsArray from 'transactions.json';

import ProfileUser from './ProfileUser/ProfileUser';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import { Container } from './App.styled';
export const App = () => {
  return (
    <Container>
      <ProfileUser
        username={userObject.username}
        tag={userObject.tag}
        location={userObject.location}
        avatar={userObject.avatar}
        stats={userObject.stats}
      />
      <Statistics />
      <FriendList friends={friendArray} />
      <TransactionHistory transactions={transactionsArray} />
    </Container>
  );
};
// console.log(dataArray);

// App.propTypes = {
//   dataId: PropTypes.string.isRequired,
// };
