import React, { useState } from "react";

export const HookUseState = () => {
  // 1 - useState
  let username = "joão";
  const [name, setName] = useState("");

  const changeName = () => {
    username = "joão souza";
    setName("teste Ana");

    console.log(username);
  };
  console.log(name);

  //   2 usestate input
  const [age, setAge] = useState(18);
  const handleSubmit = (e) => {
    e.preventDefault();
    // envio a uma api
    console.log(age);
  };

  return (
    <div>
      {/* 1 - usestate */}
      <h2>1 - UseState</h2>
      <p>Variavel: {username}</p>
      <p>useState: {name}</p>
      <button onClick={changeName}>Mudar Nomes</button>
      <hr />

      {/* 2 usestate input */}
      <h2>2 usestate input</h2>
      <form onSubmit={handleSubmit}>
        <p>Digite a sua idade: </p>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos</p>
      <hr />

      
    </div>
  );
};
