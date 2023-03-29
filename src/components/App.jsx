import React from 'react';

import Profile from "../components/Profile";
import user from "../json/user.json";

import Statistics from "../components/Statistics";
import data from "../json/data.json";

import FriendList from "../components/FriendList";
import friends from "../json/friends.json";

import TransactionHistory from "../components/TransactionHistory";
import transactions from "../json/transactions.json";


function App() {
  return (
    <div>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
      />
        <Statistics title = "UPLOAD STATS" stats={data} />
        <FriendList friends = {friends} />
        <TransactionHistory items={transactions} />
    </div>
    );
  }

  export default App;




/*  
    <FriendList friends = {friends} />
    <TransactionHistory items={transactions} /> */



