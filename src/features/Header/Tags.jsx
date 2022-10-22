import styles from "./Tags.module.css";

function Tags() {
  return (
    <section className={styles.tags}>
      <h3>My tags</h3>
      <ul className={styles["tag-list"]}>
        <li>Hello-Hello-Hello-Hello</li>
        <li>Hello-Hello-Hello-Hello</li>
        <li>Hello-Hello-Hello-Hello</li>
        <li>Hello-Hello-Hello-Hello</li>
        <li>Hello-Hello-Hello-Hello</li>
        <li>Hello-Hello-Hello-Hello</li>
      </ul>
    </section>
  );
}

export default Tags;
