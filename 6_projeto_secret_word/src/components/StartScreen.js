import React from "react";

import "./StartScreen.css";

export const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para jogar</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};
