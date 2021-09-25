import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import styles from "../../styles/[slug].module.css";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function profile({ title, body, name, mainImage, authorImage }) {
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.div1}>
            <div className={styles.div2}>
              <h1 className={styles.h1}>{title}</h1>
            </div>
            <div>
              <img
                src={urlFor(mainImage)}
                alt={title}
                className={styles.mainImage}
              />
            </div>
          </div>
        </header>
        <div className={styles.bodyContent}>
          <BlockContent
            blocks={body}
            projectId="elrqgv25"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}

export const getServerSideProps = async (context) => {
  const pageSlug = context.query.slug;
  if (!pageSlug) {
    return { notFound: true };
  }
  const data = await sanityClient.fetch(`*[slug.current=='${pageSlug}']{
  title,
  _id,
  slug,
  mainImage{
  asset->{
  _id,
  url
}
},
  body,
  'name':author->name,
'authorImage':author->image
}`);
  const post = data[0];
  console.log(post);
  if (!post) {
    return { notFound: true };
  } else {
    return {
      props: {
        title: post.title,
        body: post.body,
        name: post.name,
        mainImage: post.mainImage,
        authorImage: post.authorImage,
      },
    };
  }
};
