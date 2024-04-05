import Link from "next/link";
import Header from "../components/Header/Headr";
import Popular from "../components/PopularProducts/Popular";
const Index = ({ products }) => {
  return (
    <div>
      <Header />
      {/* <h1>Главная страница</h1> */}
      <div>
        <Link href="/products">Products</Link>
        <Popular products={products} />
      </div>
    </div>
  );
};
export default Index;
export async function getStaticProps() {
  const response = await fetch(
    "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
  );
  const products = await response.json();

  return {
    props: { products },
  };
}
