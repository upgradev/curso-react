import React, { useState } from "react";

import "./MyForm.css";

export const Myform = ({ user }) => {
  // 6 controlled inputs
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(name, email, bio, role);
    // validacao
    // envio

    // 7 limpar formulario
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      {/* 5 - envio de form */}
      {/* 1 - Criacao de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>

        {/* 2-  label envolvendo input */}
        <label>
          <span>Email</span>
          {/* 4 - simplificacao de manipulacao de states */}
          <input
            type="email"
            name="email"
            placeholder="Digite o email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        {/*8  textarea */}
        <label>
          <span>Bio</span>
          <textarea
            name="bio"
            placeholder="Descrição usuario"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        {/* 9 select */}
        <label>
          <span>Função do sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
