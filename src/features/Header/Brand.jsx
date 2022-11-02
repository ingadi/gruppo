import styles from "./Brand.module.css";

function Brand() {
  return (
    <section className={styles.brand}>
      <h1 className={styles.title}>gruppo</h1>
      <p className={styles.description}>categorize your resources</p>
    </section>
  );
}

export default Brand;
