import React from "react";

export default function TemplateExpression() {
  const name = "Ana";
  const data = {
    age: 32,
    job: "Programmer",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job} </p>
      <p>{4 + 4}</p>
      {/* <p>{console.log("JSX js")}</p> */}
    </div>
  );
}
