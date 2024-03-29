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
    `https://api.escuelajs.co/api/v1/products/${params.id}`
  );
  const product = await response.json();
  console.log(product);
  return {
    props: { product },
  };
}
