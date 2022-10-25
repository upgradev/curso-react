import React from "react";

export const CarDetails = ({ brand, km, color, novo }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {novo && <p>Este carro é novo</p>}
    </div>
  );
};
