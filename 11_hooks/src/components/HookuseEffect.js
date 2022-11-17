import React, { useEffect, useState } from "react";

export const HookuseEffect = () => {
  //5 useeffect sem dependencias
  useEffect(() => {
    console.log("estou sendo executado");
  });
  const [number, setNumber] = useState(1);
  const changeSomething = () => {
    setNumber(number + 1);
  };

  //   6 - Use Effect array vazio
  useEffect(() => {
    console.log("Serei executado apenas uma vez");
  }, []);

  //   7 - Use Effect array dependencia com valor
  const [anotherNumber, setAnotherNumber] = useState(0);
  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado quando o anotherNumber muda");
    }
  }, [anotherNumber]);

  //   8 cleanup useefect
  useEffect(() => {
    // const timer = setTimeout(() => {
    //     console.log("hello world");
    //     // setAnotherNumber(anotherNumber + 1)
    // }, 2000);
    
    // return () => clearTimeout(timer)
  }, [anotherNumber]);

  return (
    <div>
      <h2>5 - Use Effect sem dependencias</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <hr />

      <h2>6 - Use Effect array vazio</h2>

      <h2>7 - Use Effect array dependencia</h2>
      <p>Another number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar Another number
      </button>

      <hr />
    </div>
  );
};
