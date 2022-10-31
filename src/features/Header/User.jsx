import LoadingIndicator from "../../components/LoadingIndicator";
import AuthContext from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { FiLogOut } from "react-icons/fi";
import styles from "./User.module.css";
import { useState } from "react";
import buttonStyles from "../../components/Button.module.css";

function User() {
  const [isLoading, setIsLoading] = useState(false);
  const { userInfo } = useContext(AuthContext);
  const { displayName, photoURL, signOut } = userInfo;

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      //handle error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.user}>
      {isLoading && <LoadingIndicator className={buttonStyles["icon-lg"]} />}
      {!isLoading && (
        <label tabIndex={0} htmlFor="userAvatar">
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
      )}
    </div>
  );
}

export default User;
