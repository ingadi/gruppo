import { logOut } from "../../api/auth";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import styles from "./User.module.css";
// import buttonStyles from "../../components/Button.module.css";

// const styles = { ...userStyles, ...buttonStyles };

function User() {
  const handleLogout = async () => {
    try {
      await logOut();
      console.log("hi");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.user}>
      <label tabIndex={0} htmlFor="userAvatar">
        {/* <input type="checkbox" name="" id="userAvatar" /> */}
        <div className={styles.avatar}>
          <img src="" alt="" className={styles["user-img"]} />
          <span className={styles.username}> Tim Apple</span>
        </div>
        <ul>
          <li onClick={handleLogout}>
            <FiLogOut />
            Logout
          </li>
        </ul>
      </label>
    </div>
    // <div tabIndex="0" className={styles.user}>
    //   {/*todo use css modules compose to reduce*/}
    //   <span
    //     className={`${styles.avatar} ${styles.btn} ${styles.md} ${styles["secondary-outline"]} ${styles.rounded}`}
    //   >
    //     <AiOutlineUser className={styles["icon-md"]} />
    //     Tim Apple
    //   </span>
    //   <ul className={styles.actions}>
    //     <li>
    //       <a onClick={handleLogout}>
    //         <FiLogOut />
    //         Logout
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default User;
