import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { BsBookHalf } from "react-icons/bs";
import { FiArchive, FiTrash } from "react-icons/fi";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { MdArticle } from "react-icons/md";
import { FaFileVideo, FaArchive } from "react-icons/fa";
import resourceStyles from "./Resources.module.css";
import buttonStyles from "../../components/Button.module.css";

const styles = { ...resourceStyles, ...buttonStyles };

function Resources() {
  return (
    <div className={styles.resources}>
      <ul className={styles.list}>
        <li className={styles.resource}>
          <b className={styles.type}>
            <span>
              <BsBookHalf />
              Book
            </span>
            <FaArchive title="Archived" />
          </b>
          <img className={styles.img} src="" alt="" />
          <div className={styles.description}>
            <div className={styles["description-text"]}>
              <b className={styles["description-tags"]}>Tag</b>
              <p>Hello-Hello-Hello-Hello</p>
            </div>
            <div className={styles["description-actions"]}>
              <button className={`${styles.btn} ${styles.sm} ${styles.text}`}>
                <HiOutlineClipboardCopy className={styles["icon-md"]} />
                Copy
              </button>
              <button className={`${styles.btn} ${styles.sm} ${styles.text}`}>
                <FiArchive className={styles["icon-md"]} />
                Archive
              </button>
              <button className={`${styles.btn} ${styles.sm} ${styles.text}`}>
                <FiTrash className={styles["icon-md"]} />
                Delete
              </button>
            </div>
          </div>
        </li>
        <li className={styles.resource}>
          <b className={styles.type}>
            <span>
              <MdArticle />
              Article
            </span>
            <FaArchive title="Archived" />
          </b>

          <img className={styles.img} src="" alt="" />
          <div className={styles.description}>
            <div className={styles["description-text"]}>
              <b className={styles["description-tags"]}>Tag</b>
              <p>Hello-Hello-Hello-Hello</p>
            </div>
            <div className={styles["description-actions"]}>
              <button className={`${styles.btn} ${styles.sm} ${styles.text}`}>
                <HiOutlineClipboardCopy className={styles["icon-md"]} />
                Copy
              </button>
              <button className={`${styles.btn} ${styles.sm} ${styles.text}`}>
                <FiArchive className={styles["icon-md"]} />
                Archive
              </button>
              <button className={`${styles.btn} ${styles.sm} ${styles.text}`}>
                <FiTrash className={styles["icon-md"]} />
                Delete
              </button>
            </div>
          </div>
        </li>
        <li className={styles.resource}>
          <b className={styles.type}>
            <span>
              <FaFileVideo />
              Video
            </span>
            <FaArchive title="Archived" />
          </b>
          <img className={styles.img} src="" alt="" />
          <div className={styles.description}>
            <div className={styles["description-text"]}>
              <b className={styles["description-tags"]}>Tag</b>
              <p>Hello-Hello-Hello-Hello</p>
            </div>
            <div className={styles["description-actions"]}>
              <button className={`${styles.btn} ${styles.sm} ${styles.text}`}>
                <HiOutlineClipboardCopy className={styles["icon-md"]} />
                Copy
              </button>
              <button className={`${styles.btn} ${styles.sm} ${styles.text}`}>
                <FiArchive className={styles["icon-md"]} />
                Archive
              </button>
              <button className={`${styles.btn} ${styles.sm} ${styles.text}`}>
                <FiTrash className={styles["icon-md"]} />
                Delete
              </button>
            </div>
          </div>
        </li>
      </ul>
      <div className={styles["resources-actions"]}>
        <button
          className={`${styles.btn} ${styles.md} ${styles.icon} ${styles["primary-outline"]}`}
        >
          <AiOutlineArrowLeft />
          Previous
        </button>
        <button
          className={`${styles.btn} ${styles.md} ${styles.icon} ${styles.rounded} ${styles.primary} ${styles["resources-actions-new"]}`}
        >
          <IoMdAdd className="icon-md" />
          Add resource
        </button>
        <button
          className={`${styles.btn} ${styles.md} ${styles.icon} ${styles["primary-outline"]}`}
        >
          Next
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Resources;
