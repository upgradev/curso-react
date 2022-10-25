import React from "react";

export const Fragment = ({propFragment}) => {
  return (
    <>
      <h2>Primeiro titulo</h2>
      <h3>Segundo titulo</h3>
      <h4>{propFragment}</h4>
    </>
  );
};
