import Brand from "./Brand";
import User from "./User";
import Tags from "./Tags";

import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <Brand />
      <User />
      <Tags />
    </header>
  );
}

export default Header;
