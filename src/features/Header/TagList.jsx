import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import buttonStyles from "../../components/Button.module.css";
import tagListStyles from "./TagList.module.css";
import inputStyles from "../../components/Input.module.css";

const styles = { ...tagListStyles, ...buttonStyles, ...inputStyles };

function TagList() {
  return (
    <ul className={styles["tag-list"]}>
      <li>
        <TagListForm formId="form1" type="new" placeHolder="Create tag" />
      </li>
      <li>
        <label htmlFor="programming">
          <span
            title="Programming"
            className={`${styles.control} ${styles["list-control"]}`}
          >
            Programming
          </span>
          <TagListForm
            formId="programming-form"
            type="edit"
            placeHolder="Programming"
          />
          <button
            title="Delete tag"
            type="button"
            className={`${styles.btn} ${styles["xx-sm"]} ${styles.rounded} ${styles.primary} ${styles.icon}`}
          >
            <RiDeleteBin6Line />
          </button>
          <input type="radio" name="level1" id="programming" />
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </label>
      </li>
      <li>
        <label htmlFor="music">
          <span
            title="Music"
            className={`${styles.control} ${styles["list-control"]}`}
          >
            Music
          </span>
          <TagListForm formId="music-form" type="edit" placeHolder="Music" />
          <button
            title="Delete tag"
            type="button"
            className={`${styles.btn} ${styles["xx-sm"]} ${styles.rounded} ${styles.primary} ${styles.icon}`}
          >
            <RiDeleteBin6Line />
          </button>
          <input type="radio" name="level1" id="music" />
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </label>
      </li>
    </ul>
  );
}

function TagListForm({ formId, type, placeHolder = "" }) {
  const label = type === "new" ? "Create tag" : <BsPencilSquare />;

  return (
    <label htmlFor={formId}>
      <span
        className={`${styles.control} ${
          styles[`input-control-${type}`] || ""
        } `}
      >
        {label}
      </span>
      <input type="checkbox" name="" id={formId} />
      <form>
        <input
          className={`${styles["field-icon"]} ${
            styles[`input-control-${type}`]
          }`}
          type="text"
          placeholder={placeHolder}
        />
        <div className={styles["input-actions"]}>
          <button
            type="button"
            className={`${styles.btn} ${styles.sm} ${styles.rounded} ${styles.primary} ${styles["icon-center"]}`}
          >
            <AiOutlineCheckCircle className={styles["icon-md"]} />
            Save
          </button>
          <span
            className={`${styles.btn} ${styles.sm} ${styles.rounded} ${styles.primary} ${styles["icon-center"]}`}
          >
            <AiOutlineCloseCircle className={styles["icon-md"]} />
            Cancel
          </span>
        </div>
      </form>
    </label>
  );
}

export default TagList;
