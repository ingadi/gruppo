import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./LoadingIndicator.module.css";

function LoadingIndicator({ className = "" }) {
  return (
    <AiOutlineLoading3Quarters className={`${className} ${styles.rotate}`} />
  );
}

export default LoadingIndicator;
