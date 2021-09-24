import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import styles from "../styles/post.module.css";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function Characters({ data }) {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.h1}>Friendly people everywhere!</h1>
        <h2 className={styles.h2}>Welcome to South Park</h2>
        <div className={styles.grid}>
          {data &&
            data.map((post, index) => {
              return (
                <article key={index} className={styles.article}>
                  <Link href={"/post/" + post.slug.current}>
                    <span className={styles.item}>
                      <img
                        src={urlFor(post.mainImage)
                          .width(400)
                          .height(600)
                          .url()}
                        alt={post.title}
                        className={styles.img}
                      />
                      <span className={styles.name}>
                        <h3 className={styles.h3}>{post.title}</h3>
                      </span>
                    </span>
                  </Link>
                </article>
              );
            })}
        </div>
      </section>
    </main>
  );
}
export const getStaticProps = async () => {
  const data =
    await sanityClient.fetch(`*[_type=='post']{title,slug,mainImage{asset->{
                 _id,url
                }}}`);
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
