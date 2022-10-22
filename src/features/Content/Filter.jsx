import filterStyles from "./Filter.module.css";
import buttonStyles from "../../components/Button.module.css";
import inputStyles from "../../components/Input.module.css";

const styles = { ...filterStyles, ...buttonStyles, ...inputStyles };

function Filter() {
  return (
    <form className={styles.filter}>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          Search
        </label>
        <input
          className={`${styles.field} ${styles["field-icon"]} ${styles["icon-search"]}`}
          type="text"
          name=""
          id=""
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          Filters
        </label>
        <select
          className={`${styles.field} ${styles["field-icon"]} ${styles["icon-filter"]}`}
          name=""
          id=""
          multiple
          list="filters"
        >
          <option value="">All</option>
          <option value="">Videos</option>
          <option value="">Books</option>
          <option value="">Archived</option>
        </select>
      </div>
    </form>
  );
}

export default Filter;
