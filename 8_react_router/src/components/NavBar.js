// 2 links com react router

import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

export const NavBar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        end
        // className={({isActive}) => (isActive ? 'esta_ativo' : 'nao_ativo') }
      >
        Home
      </NavLink>
      <NavLink to="/about">Sobre</NavLink>
      {/* <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link> */}
    </nav>
  );
};
