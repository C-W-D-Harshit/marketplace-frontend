import Head from "next/head";
import Link from "next/link";
import Banner from "../../components/home/Banner";
import Shop_By_Categories from "../../components/home/Shop_By_Categories";
import DOD from "../../components/home/DOD";
import baseUrl from "../../helpers/baseUrl";

export default function Home({ Dproducts, Nproducts }) {
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
        {Dproducts.length >= 1 && (
          <DOD title="Deals of the Day!" wtd="dod" products={Dproducts} />
        )}
        {Nproducts.length >= 1 && (
          <DOD title="New Arrivals!" wtd="nA" products={Nproducts} />
        )}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  let res = null;
  let data = [];
  let res1 = null;
  let data1 = [];
  try {
    res = await fetch(`${baseUrl}/api/v1/products/dod`);
    data = await res.json();
    res1 = await fetch(`${baseUrl}/api/v1/products/nA`);
    data1 = await res1.json();
    return {
      props: {
        Dproducts: data.products,
        Nproducts: data1.products,
      },
    };
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
    };
  }
}
