import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.item}>
            <h4>Inter Milan</h4>
            <ul className={styles.ul}>
              <li>7758258</li>
              <li>Tasmania, Australia</li>
              <li>257 Love Ave</li>
            </ul>
          </div>
          <div className={styles.item}>
            <h4>New Castle</h4>
            <ul className={styles.ul}>
              <li>7758258</li>
              <li>Tasmania, Australia</li>
              <li>257 Love Ave</li>
            </ul>
          </div>
          <div className={styles.item}>
            <h4>Machester United</h4>
            <ul className={styles.ul}>
              <li>7758258</li>
              <li>Tasmania, Australia</li>
              <li>257 Love Ave</li>
            </ul>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.grid}>
          <p>
            @copy {new Date().getFullYear()} INTER MILAN INC | All right
            reserved| Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}
