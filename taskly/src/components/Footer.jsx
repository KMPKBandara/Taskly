import styles from "./footer.module.css";
export default function Footer({ completeTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completeTodos}</span>
      <span className={styles.item}>Total Todos: {totalTodos}</span>
    </div>
  );
}
