import { SubscribeButton } from "@/components/SubscribeButton";
import Head from "next/head";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {`$9.90`}</span> month
          </p>
          <SubscribeButton />
        </section>

        <picture>
          <img src="/images/avatar.svg" alt="Girl coding" />
        </picture>
      </main>
    </>
  );
}
