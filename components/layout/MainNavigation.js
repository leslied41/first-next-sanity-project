import styles from "./MainNavigation.module.css";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.div1}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.southpark}>
              <Link href="/" exact>
                South Park
              </Link>
            </li>
            <li className={router.pathname == "/post" ? styles.postactive : ""}>
              <Link href="/post">Characters</Link>
            </li>
            <li
              className={
                router.pathname == "/project" ? styles.projectactive : ""
              }
            >
              <Link href="/project">Clips</Link>
            </li>
            <li
              className={router.pathname == "/about" ? styles.aboutactive : ""}
            >
              <Link href="/about">About me</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.icons}>
          <SocialIcon
            url="https://twitter.com/home"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, wdith: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, wdith: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, wdith: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
