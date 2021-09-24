import Head from "next/head";
import Image from "next/image";
import image from "../south_park.jpg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={image} alt="south park" layout="fill" />

      <section className={styles.section}>
        <h1 className="text-7xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          the South Park
        </h1>
      </section>
    </main>
  );
}
