export default function TodoList({ todos }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        todos.map((item, index) => <p key={index}>{item}</p>)
      )}
    </div>
  );
}
