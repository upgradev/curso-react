import React, { useCallback, useState } from "react";
import { List } from "./List";

export const HookUseCallBack = () => {
  // 11 HookUseCallBack
  const [counter, setCounter] = useState(0);

  const getItemsFromDatabase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);

  return (
    <div>
      <h2>11 - HookUseCallBack</h2>
      <List getItems={getItemsFromDatabase} />
      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <p>{counter}</p>
      <hr />
    </div>
  );
};
