import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

export const Search = () => {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/products?" + searchParams;

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Dados Disponiveis</h1>
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
              {/* 4 rota dinamica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
