import resourceStyles from "./Resources.module.css";
import buttonStyles from "../../components/Button.module.css";

const styles = { ...resourceStyles, ...buttonStyles };

function Resources() {
  return (
    <div className={styles.resources}>
      <ul className={styles.list}>
        <li className={styles.resource}>
          <b className={styles.type}>Article</b>
          <img className={styles.img} src="" alt="" />
          <div className={styles.description}>
            <div className={styles["description-text"]}>
              <b>Tag</b>
              <p>Hello-Hello-Hello-Hello</p>
            </div>
            <div className={styles["description-actions"]}>
              <button className={`${styles.btn} ${styles.sm} ${styles.icon}`}>
                Archive
              </button>
              <button className={`${styles.btn} ${styles.sm} ${styles.icon}`}>
                Delete
              </button>
              <button className={`${styles.btn} ${styles.sm} ${styles.icon}`}>
                Share
              </button>
            </div>
          </div>
        </li>
        <li className={styles.resource}>
          <b className={styles.type}>Article</b>
          <img className={styles.img} src="" alt="" />
          <div className={styles.description}>
            <div className={styles["description-text"]}>
              <b>Tag</b>
              <p>Hello-Hello-Hello-Hello</p>
            </div>
            <div className={styles["description-actions"]}>
              <button className={`${styles.btn} ${styles.sm} ${styles.icon}`}>
                Archive
              </button>
              <button className={`${styles.btn} ${styles.sm} ${styles.icon}`}>
                Delete
              </button>
              <button className={`${styles.btn} ${styles.sm} ${styles.icon}`}>
                Share
              </button>
            </div>
          </div>
        </li>
        <li className={styles.resource}>
          <b className={styles.type}>Article</b>
          <img className={styles.img} src="" alt="" />
          <div className={styles.description}>
            <div className={styles["description-text"]}>
              <b>Tag</b>
              <p>Hello-Hello-Hello-Hello</p>
            </div>
            <div className={styles["description-actions"]}>
              <button className={`${styles.btn} ${styles.sm} ${styles.icon}`}>
                Archive
              </button>
              <button className={`${styles.btn} ${styles.sm} ${styles.icon}`}>
                Delete
              </button>
              <button className={`${styles.btn} ${styles.sm} ${styles.icon}`}>
                Share
              </button>
            </div>
          </div>
        </li>
      </ul>
      <div className={styles["resources-actions"]}>
        <button
          className={`${styles.btn} ${styles.md} ${styles["primary-outline"]}`}
        >
          Previous
        </button>
        <button
          className={`${styles.btn} ${styles.md} ${styles.rounded} ${styles.primary} ${styles["resources-actions-new"]}`}
        >
          Add resource
        </button>
        <button
          className={`${styles.btn} ${styles.md} ${styles["primary-outline"]}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Resources;
