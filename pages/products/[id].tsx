import { useRouter } from "next/router";
import Header from "../../components/Header/Headr";
import Product from "../../components/ProductPage/Product";

const ProductPage = ({ product }) => {
  const { query } = useRouter();
  return (
    <>
      <Header />
      <Product product={product} />
    </>
  );
};
export default ProductPage;
export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://mock.shop/api?query={product(id:%20%22${encodeURIComponent(
      params.id
    )}%22){id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{cursor%20node%20{id%20title%20image%20{url}%20price%20{amount%20currencyCode}}}}}}`
  );
  const product = await response.json();
  console.log(product);
  return {
    props: { product },
  };
}
