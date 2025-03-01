import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.trim()) return;
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo("");
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          placeholder="Add a new task"
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
