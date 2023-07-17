import userObject from '../databases/user.json';
import friendArray from '../databases/friends.json';
import transactionsArray from '../databases/transactions.json';

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
