import styles from "./todoitem.module.css";

export default function TodoItem({ item }) {
  // Fixed destructuring
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button>x</button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
