import MainNavigation from "./MainNavigation.js";
import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
