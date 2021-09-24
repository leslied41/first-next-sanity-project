import Head from "next/head";
import Image from "next/image";
import image from "../butters.jpeg";
import styles from "../styles/about.module.css";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}
export default function About({ authorImage, authorName, bio }) {
  return (
    <main className={styles.main}>
      <Image src={image} alt="south park" layout="fill" />

      <section className={styles.section}>
        <img
          src={urlFor(authorImage).url()}
          alt="avatar"
          className={styles.img}
        />
        <div className={styles.text}>
          <h1 className={styles.h1}>Hey fellas, We are {authorName}!</h1>
          <h3 className={styles.h3}>
            <BlockContent
              blocks={bio}
              projectId="elrqgv25"
              dataset="production"
            />
          </h3>
        </div>
      </section>
    </main>
  );
}
export const getStaticProps = async () => {
  const data =
    await sanityClient.fetch(`*[_type=='author'&&name=='Trey Parker & Matt Stone']{'authorImage':image.asset->url,'authorName':name,bio
  
}
`);

  if (!data) {
    return { notFound: true };
  } else {
    const { authorImage, authorName, bio } = data[0];
    return {
      props: { authorImage, authorName, bio },
    };
  }
};
