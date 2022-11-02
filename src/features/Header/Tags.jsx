import TagList from "./TagList";
import styles from "./Tags.module.css";

function Tags() {
  return (
    <section className={styles.tags}>
      <h3>My tags</h3>
      <TagList />
    </section>
  );
}

export default Tags;
