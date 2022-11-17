import React, { useEffect, useLayoutEffect, useState } from "react";

export const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Algum nome");

  useEffect(() => {
    console.log("2");
    setName("mudou de novo");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("Outro nome use layout");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>13 - HookUseLayoutEffect</h2>
      <p>Nome: {name} </p>
      <hr />
    </div>
  );
};
