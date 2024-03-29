import Link from "next/link";
import Header from "../components/Header/Headr";
import Popular from "../components/PopularProducts/Popular";
const Index = ({ products }) => {
  return (
    <div>
      <Header />
      <h1>Главная страница</h1>
      <Link href="/products">Products</Link>
      <Popular products={products} />
    </div>
  );
};
export default Index;
export async function getStaticProps() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const products = await response.json();

  return {
    props: { products },
  };
}
