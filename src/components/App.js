import React from "react";
import Profile from "../components/Profile/Profile";
import Statistics from "../components/Stats/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./Transactions/Transactions";

import user from "../data/users.json";
import statisticalData from "../data/statistical-data.json";
import friends from "../data/friensds.json";
import transactions from "../data/transactions.json";

const App = () => {
  console.log(statisticalData);
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </>
  );
};

export default App;
