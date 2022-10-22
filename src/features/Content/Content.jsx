import styles from "./Content.module.css";
import Filter from "./Filter";
import Resources from "./Resources";

function Content() {
  return (
    <section className={styles.content}>
      <h2>My resources</h2>
      <Filter />
      <Resources />
    </section>
  );
}

export default Content;
