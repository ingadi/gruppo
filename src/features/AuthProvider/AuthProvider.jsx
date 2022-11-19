import LoadingIndicator from "../../components/LoadingIndicator";
import Toast from "../../components/Toast";
import { createContext, useState, useEffect } from "react";
import { signInWithGoogle, getUserInfo } from "../../api/auth";
import styles from "./AuthProvider.module.css";
import { BsGoogle } from "react-icons/bs";
import buttonStyles from "../../components/Button.module.css";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [notification, setNotification] = useState({
    type: null,
    message: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
    } catch (error) {
      setNotification({
        type: "error",
        message: "Something went wrong, maybe try again?",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getUserInfo(setUserInfo).finally(() => setIsLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ userInfo }}>
      {notification["type"] && (
        <Toast type={notification["type"]} message={notification["message"]} />
      )}
      {userInfo === null ? (
        <section className={styles.login}>
          <h1 className={styles.title}>gruppo</h1>
          <p className={styles.description}>categorize your resources</p>
          <div className={styles.actions}>
            {isLoading && (
              <LoadingIndicator className={`${buttonStyles["icon-lg"]}`} />
            )}
            {!isLoading && (
              <button
                className={`${styles["login-btn"]} ${buttonStyles.btn} ${buttonStyles["secondary-outline"]} ${buttonStyles.rounded} ${buttonStyles.lg}`}
                onClick={handleSignIn}
              >
                <BsGoogle className={`${buttonStyles["icon-md"]}`} />
                Login with Google
              </button>
            )}
          </div>
        </section>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}
