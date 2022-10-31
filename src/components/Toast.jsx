import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import styles from "./Toast.module.css";
import { GiTerror } from "react-icons/gi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import buttonStyles from "./Button.module.css";

function Toast({ type = "info", message = "" }) {
  const [slideUp, setSlideUp] = useState(false);
  const [slideDown, setSlideDown] = useState(false);

  useEffect(() => {
    setSlideUp(true);
    return () => {
      setSlideUp(false);
      setSlideDown(true);
    };
  }, []);

  return createPortal(
    <div
      className={`${styles.toast}  ${type === "error" ? styles.error : ""} ${
        slideUp ? styles["slide-up"] : ""
      } ${slideDown ? styles["slide-down"] : ""}`}
    >
      <p>
        <span className={`${buttonStyles["icon-lg"]}`}>
          {type === "error" ? <GiTerror /> : <BsFillInfoSquareFill />}
        </span>

        {message}
      </p>
    </div>,
    document.getElementById("overlay-root")
  );
}

export default Toast;
