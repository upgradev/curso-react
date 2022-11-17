import React, { useReducer, useState } from "react";

export const HookUseReducer = () => {
  // 3 começando copm useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  //    4- userReducer avançado
  const initialTasks = [
    { id: 1, text: "Fazer algo" },
    { id: 2, text: "Fazer algo 2" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");
        return [...state, newTask];

      case "DELETE":
        return state.filter((task) => task.id !== action.id);

      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id: id });
  };

  return (
    <div>
      {/* 3- userReducer */}
      <h2>3 - useReducer</h2>
      <p>Numero: {number} </p>
      <button onClick={dispatch}>Alterar Numero</button>
      <hr />

      {/* 3- userReducer avançado */}
      <h2>4 - useReducer avançado</h2>
      <p>Tarefas</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
          {" "}
          {task.text}{" "}
        </li>
      ))}
      <hr />
    </div>
  );
};
