import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();

    // Check if todo.name is a string and not empty after trimming
    if (!todo.name.trim()) return;

    setTodos((prevTodos) => [...prevTodos, todo]);

    // Reset input field after submission
    setTodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) =>
            setTodo({ ...todo, name: e.target.value, done: false })
          } // Maintain object structure
          value={todo.name}
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
