import React, { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

export const About = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h2>About</h2>
      <h2> 8 - useContext </h2>
      <p>Valor do context: { contextValue } </p>
      <hr />
    </div>
  );
};
