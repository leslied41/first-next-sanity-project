import MainNavigation from "./MainNavigation.js";
import styles from "./Layout.module.css";
import Footer from "./Footer.js";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
