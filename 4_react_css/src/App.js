import { useState } from "react";
import "./App.css";
import { MyComponents } from "./components/MyComponents";
import { Title } from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Ana");

  const redTitle = false;

  return (
    <div className="App">
      {/* css global */}
      <h1>React com CSS</h1>

      {/* css de componente */}
      <MyComponents />
      <p>Este paragrafo é do App.js</p>

      {/* inline css */}
      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "3px solid red",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      <p style={{ color: "blue", padding: "25px", borderTop: "3px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>

      {/* css inline dinamico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        Css dinamico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        Css dinamico
      </h2>
      <h2
        style={
          name === "Ana" ? { color: "green", backgroundColor: "#000" } : null
        }
      >
        Teste nome
      </h2>

      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter classe dinâmica
      </h2>

      {/* css modules */}
      <Title />
      <h2 className="my_title">Testando</h2>
    </div>
  );
}

export default App;
