import React, { useEffect, useMemo, useState } from "react";

export const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  //   const premiumNumber = ["0", "100", "200"];
  const premiumNumber = useMemo(() => {
    return ["0", "100", "200"];
  }, []);

  useEffect(() => {
    console.log("Premium number foi alterado");
  }, [premiumNumber]);

  return (
    <div>
      <h2>12 - HookUseMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumber.includes(number) ? <p>Acertou numero</p> : <p></p>}
      <hr />
    </div>
  );
};
