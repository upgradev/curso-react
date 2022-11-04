// 3 alterando contexto

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

import React from "react";

export const ChangeCounter = () => {
  const {counter, setCounter} = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Add value counter</button>
    </div>
  );
};
