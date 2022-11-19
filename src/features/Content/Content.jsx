import { useContext } from "react";
import Breadcrumb from "../../components/Breadcrumbs";
import DepthContext from "../SelectedTagsProvider";
import styles from "./Content.module.css";
import Filter from "./Filter";
import Resources from "./Resources";

function Content() {
  const { selected } = useContext(DepthContext);
  const { selectedTagTitles } = selected;

  return (
    <section className={styles.content}>
      <h2>My resources</h2>
      <Filter selectedTags={selectedTagTitles} />
      <Breadcrumb list={selectedTagTitles} />
      <Resources selectedTags={selectedTagTitles} />
    </section>
  );
}

export default Content;
