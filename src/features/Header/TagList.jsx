import {
  AiOutlineCloseCircle,
  AiOutlineCheckCircle,
  AiOutlineUnorderedList,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbTagsOff } from "react-icons/tb";
import buttonStyles from "../../components/Button.module.css";
import tagListStyles from "./TagList.module.css";
import inputStyles from "../../components/Input.module.css";

const styles = { ...tagListStyles, ...buttonStyles, ...inputStyles };
let depth = 1;

function TagList({ data }) {
  return (
    <ul className={styles["tag-list"]}>
      <li>
        <label className={`${styles["no-list"]}`} htmlFor="not-tagged">
          <input type="radio" name={`depth-${depth}`} id="not-tagged" />
          <TbTagsOff />
          <span title="Show resources with no tags">Not tagged</span>
        </label>
      </li>
      <li>
        <label className={`${styles["no-list"]}`} htmlFor="all-tagged">
          <input type="radio" name={`depth-${depth}`} id="all-tagged" />
          <AiOutlineUnorderedList />
          <span title="Show all resources">All tags</span>
        </label>
      </li>
      <li>
        <TagItemForm
          formId={`new-tag-${Date.now()}`}
          type="new"
          placeHolder="Create tag"
        />
      </li>
      {data.map((tagDetails) => (
        <TagItem key={tagDetails.id} depth={depth} data={tagDetails} />
      ))}
      <li className={styles.pagination}>
        <button
          title="Previous"
          className={`${styles.btn} ${styles.icon} ${styles["icon-lg"]}`}
        >
          <AiOutlineLeftCircle />
        </button>
        <button
          title="Next"
          className={`${styles.btn} ${styles.icon} ${styles["icon-lg"]}`}
        >
          <AiOutlineRightCircle />
        </button>
      </li>
    </ul>
  );
}

function TagItem({ data, depth }) {
  const { title, id, children } = data;

  return (
    <li>
      <label htmlFor={id}>
        <span
          title={`Show resources with ${title} tag`}
          className={`${styles.control} ${styles["list-control"]}`}
        >
          {title}
        </span>
        <TagItemForm
          formId={`edit-tag-${id}`}
          type="edit"
          placeHolder={title}
        />
        <button
          title="Delete tag"
          type="button"
          className={`${styles.btn} ${styles["xx-sm"]} ${styles.rounded} ${styles.primary} ${styles.icon}`}
        >
          <RiDeleteBin6Line />
        </button>
        <input type="radio" name={`depth-${depth}`} id={id} />
        <ul>
          <li>
            <TagItemForm
              formId={`${Date.now()}`}
              type="new"
              placeHolder="Create tag"
            />
          </li>
          {children.map((tagDetails) => (
            <TagItem key={tagDetails.id} depth={depth + 1} data={tagDetails} />
          ))}
        </ul>
      </label>
    </li>
  );
}

function TagItemForm({ formId, type, placeHolder = "" }) {
  const title = type === "new" ? "Create tag" : <BsPencilSquare />;

  return (
    <label htmlFor={formId}>
      <span
        title={`${type === "new" ? "Create a" : "Edit this"} tag`}
        className={`${styles.control} ${
          styles[`input-control-${type}`] || ""
        } `}
      >
        {title}
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

{
  /* break */
}
{
  /* <li>
        <TagItemForm formId="form1" type="new" placeHolder="Create tag" />
      </li>
      <li>
        <label htmlFor="programming">
          <span
            title="Show resources with programming tag"
            className={`${styles.control} ${styles["list-control"]}`}
          >
            Programming
          </span>
          <TagItemForm
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
            title="Show resources with music tag"
            className={`${styles.control} ${styles["list-control"]}`}
          >
            Music
          </span>
          <TagItemForm formId="music-form" type="edit" placeHolder="Music" />
          <button
            title="Delete this tag"
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
      </li> */
}
{
  /* break */
}
