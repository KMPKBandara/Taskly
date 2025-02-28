import { useState } from "react";

export default function Form({ setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.trim()) return;
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}
