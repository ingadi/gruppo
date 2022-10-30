// import { logOut } from "../../api/auth";
import AuthContext from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import styles from "./User.module.css";
// import buttonStyles from "../../components/Button.module.css";

// const styles = { ...userStyles, ...buttonStyles };

function User() {
  const { userInfo } = useContext(AuthContext);
  const { displayName, photoURL, signOut } = userInfo;

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      //handle error
    }
  };

  return (
    <div className={styles.user}>
      <label tabIndex={0} htmlFor="userAvatar">
        {/* <input type="checkbox" name="" id="userAvatar" /> */}
        <div className={styles.avatar}>
          <img
            referrerPolicy="no-referrer"
            src={photoURL}
            alt="User profile picture"
            className={styles["user-img"]}
          />
          <span className={styles.username}> {displayName}</span>
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
