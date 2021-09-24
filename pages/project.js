import sanityClient from "../client.js";
import Link from "next/link";
import styles from "../styles/project.module.css";
import { FaYoutube } from "react-icons/fa";

export default function Clips({ data }) {
  if (data.length == 0) {
    return (
      <main className={styles.main}>
        <h2 className={styles.h2}>
          Oops...Screw you guys, I&apos;m going home!
        </h2>
      </main>
    );
  }
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.h1}>My favorite moments</h1>
        <h2 className={styles.h2}>
          Welcome to witness how poor Kenny got killed over and over again and
          Butters suffered.
        </h2>
        <div className={styles.center}>
          <div className={styles.grid}>
            {data.map((clip, index) => {
              return (
                <article key={index} className={styles.article}>
                  <h3 className={styles.title}>
                    <a href={clip.link} target="_blank" rel="noreferrer">
                      {clip.title}
                    </a>
                  </h3>

                  <div className={styles.bottom}>
                    <span>
                      <strong className={styles.author}>Produced by</strong>:
                      {""}
                      {clip.author}
                    </span>
                    <p className={styles.description}>{clip.description}</p>
                    <a href={clip.link} className={styles.link}>
                      <FaYoutube size="3em" color="red" />
                      <h3 className={styles.youtube}>View on the youtube</h3>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
export const getStaticProps = async () => {
  const data = await sanityClient.fetch(
    `*[_type=='project']{'author':author->name,description,link,tags,title}`
  );
  console.log(data);
  if (!data || !data.length) {
    return {
      props: { data: [] },
    };
  } else {
    return {
      props: { data },
    };
  }
};
