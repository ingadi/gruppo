import modalStyles from "./Modal.module.css";
import buttonStyles from "./Button.module.css";

const styles = { ...modalStyles, ...buttonStyles };

function Modal() {
  return (
    <div className={styles.modal}>
      <section className={styles.content}>
        <h2 className={styles.title}>Hello</h2>
        <p className={styles.text}>Dea</p>
        <div className={styles.actions}>
          <button
            className={`${styles.btn} ${styles.md} ${styles["primary-outline"]}`}
          >
            Cancel
          </button>

          <button className={`${styles.btn} ${styles.md} ${styles.primary}`}>
            Do it
          </button>
        </div>
      </section>
    </div>
  );
}

export default Modal;
