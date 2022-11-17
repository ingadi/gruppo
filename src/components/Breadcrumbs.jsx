import styles from "./Breadcrumbs.module.css";

function Breadcrumb({ list }) {
  return (
    <nav className={styles.breadcrumb}>
      <ol>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
