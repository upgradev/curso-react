import React from "react";
import MyComponent from "./MyComponent";

// comentario

export default function FirstComponent() {
  // comentario

  /* 
    bloco de comentario
    aqui
  */
  return (
    <div>
      {/* comentario */}
      <h1>Meu primeiro componente</h1>
      <p className="teste">Meu texto</p>
      <MyComponent />
    </div>
  );
}
