import { AiOutlineUser } from "react-icons/ai";
import userStyles from "./User.module.css";
import buttonStyles from "../../components/Button.module.css";

const styles = { ...userStyles, ...buttonStyles };

function User() {
  return (
    <div className={styles.user}>
      {/*todo use css modules compose to reduce*/}
      <button
        className={`${styles.avatar} ${styles.btn} ${styles.md} ${styles["secondary-outline"]} ${styles.rounded}`}
      >
        <AiOutlineUser className={styles["icon-md"]} />
        Tim Apple
      </button>
      <ul className={styles.actions}>
        <li>
          <a href="">Logout</a>
        </li>
      </ul>
    </div>
  );
}

export default User;
