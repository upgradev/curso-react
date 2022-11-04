import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contato">Contato</NavLink>
      {/* <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link> */}
    </nav>
  );
};
