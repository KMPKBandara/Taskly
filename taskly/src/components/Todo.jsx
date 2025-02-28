import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h2>Todo List</h2>
      <Form setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}
