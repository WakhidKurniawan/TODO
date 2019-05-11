import React from "react";

const item = ({ todo, index, deleteTodo }) => (
  <li>
    <input defaultValue={todo} readOnly />
    <button className="remove" onClick={() => deleteTodo(todo)}>
      x
    </button>
  </li>
);

export default item;
