import { useRouter } from "next/router";
import Product from "../../components/ProductPage/Product";
import useLayout from "../../components/Layout/Layout";

const ProductPage = ({ product }) => {
  return (
    <>
      <Product product={product} />
    </>
  );
};
export default useLayout(ProductPage);
export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://mock.shop/api?query={product(id:%20%22${encodeURIComponent(
      params.id
    )}%22){id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{cursor%20node%20{id%20title%20image%20{url}%20price%20{amount%20currencyCode}}}}}}`
  );
  const product = await response.json();
  return {
    props: { product },
  };
}
