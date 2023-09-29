import React from "react";

interface Users {
  name: string;
  id: number;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Users[] = await res.json();

  return (
    <>
      <h1>Users List</h1>
      <ul>
        {users.map((user: Users) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
