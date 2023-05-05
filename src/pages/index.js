import Head from "next/head";
import Link from "next/link";
import Banner from "../../components/home/Banner";
import Shop_By_Categories from "../../components/home/Shop_By_Categories";
import DOD from "../../components/home/DOD";

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
        <Shop_By_Categories />
        <DOD title="Deals of the Day!" />
      </main>
    </>
  );
}
