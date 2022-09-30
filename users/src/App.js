import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UsersList";

function App() {
  const dummy_users_list = [
    {
      id: "1",
      name: "Adam",
      year: 14,
    },
    {
      id: "2",
      name: "Paweł",
      year: 141,
    },
  ];
  const [userlist, setUserList] = useState(dummy_users_list);

  const addUserListHandler = (newUser) => {
    setUserList((prevUserList) => {
      return [newUser, ...prevUserList];
    });
  };

  return (
    <>
      <AddUser onAddNewUser={addUserListHandler} />
      <UserList users={userlist} />
    </>
  );
}

export default App;
