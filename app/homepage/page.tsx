import React from "react";

interface User {
  name: string;
  id: number;
}

const UsersPage: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <>
      <h1>HomePage</h1>
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
    </>
  );
};

// export async function getServerSideProps() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users: User[] = await res.json();
//     return {
//       props: {
//         users,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         users: [],
//       },
//     };
//   }
// }

export default UsersPage;
