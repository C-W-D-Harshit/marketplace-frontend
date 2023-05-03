import Head from "next/head";
import Link from "next/link";
import Banner from "../../components/home/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>ShopCart</title>
        <meta name="description" content="An Ecommerce Marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className="home">
        <Banner />
      </main>
    </>
  );
}
