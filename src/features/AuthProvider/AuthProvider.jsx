import LoadingIndicator from "../../components/LoadingIndicator";
import { createContext, useState, useEffect } from "react";
import { signInWithGoogle, getUserInfo } from "../../api/auth";
import styles from "./AuthProvider.module.css";
import { BsGoogle } from "react-icons/bs";
import buttonStyles from "../../components/Button.module.css";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
    } catch (error) {
      // Handle errors
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

export default AuthContext;
