import { useContext } from "react";
import DepthContext from "../DepthProvider/DepthProvider";
import styles from "./Content.module.css";
import Filter from "./Filter";
import Resources from "./Resources";

function Content() {
  const { depth } = useContext(DepthContext);

  return (
    <section className={styles.content}>
      <h2>My resources</h2>
      <Filter depth={depth} />
      <Resources depth={depth} />
    </section>
  );
}

export default Content;
