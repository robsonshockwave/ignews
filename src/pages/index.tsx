import { GetStaticProps } from "next";
import Head from "next/head";
import { stripe } from "@/services/stripe";
import { SubscribeButton } from "@/components/SubscribeButton";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
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
          <SubscribeButton priceId={product.priceId} />
        </section>

        <picture>
          <img src="/images/avatar.svg" alt="Girl coding" />
        </picture>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1MgFu6JlT6YKRTRH8yzsPCbm", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format((price.unit_amount as number) / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
