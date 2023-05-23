import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { TransactionHistory } from 'components/Transactions/Transactions';

import user from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <FriendListItem 
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
      />
      <TransactionHistory items={transactions} />
    </div>
  );
};