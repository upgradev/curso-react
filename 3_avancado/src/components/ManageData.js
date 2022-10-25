import React from "react";
import { useState } from "react";

export const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(11);

  return (
    <div>
      <p>Valor: {someData}</p>
      <button
        onClick={() => {
          someData = 15;
        }}
      >
        Mudar variavel
      </button>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(24)}>Mudar o state</button>
      </div>
    </div>
  );
};
