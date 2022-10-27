import styles from "./Login.module.css";
import { BsGoogle } from "react-icons/bs";
import buttonStyles from "../../components/Button.module.css";

function Login() {
  return (
    <section className={styles.login}>
      <h1 className={styles.title}>gruppo</h1>
      <p className={styles.description}>categorize your resources</p>
      <button
        className={`${buttonStyles.btn} ${buttonStyles["secondary-outline"]} ${buttonStyles.rounded} ${buttonStyles.lg}`}
      >
        <BsGoogle className={`${buttonStyles["icon-md"]}`} />
        Login with Google
      </button>
    </section>
  );
}

export default Login;
