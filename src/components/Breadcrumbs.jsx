import styles from "./Breadcrumbs.module.css";

function Breadcrumb({ list }) {
  return (
    <nav className={styles.breadcrumb}>
      <ol>
        {list.map((item, idx) => (
          <li key={idx}>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
