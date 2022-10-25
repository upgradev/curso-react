import React from "react";
import { useState } from "react";

export const ListRender = () => {
  const [list] = useState(["Thay", "Ana", "Maria", "Tereza"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Thay" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Ana" },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUser) => {
      return prevUser.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};
