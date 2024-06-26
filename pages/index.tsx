import Popular from "../components/PopularProducts/Popular";

import Banner from "../components/Banner/Banner";

import useLayout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";

const Index = ({ products, loading }) => {
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Banner />
          <Popular products={products} />
        </div>
      )}
    </div>
  );
};

export default useLayout(Index);

export async function getStaticProps() {
  try {
    let loading = true;
    const response = await fetch(
      "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
    );
    const products = await response.json();
    loading = false;
    return {
      props: { products, loading }, // Передача loading как props
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { products: [], loading: false }, // Установка loading в false в случае ошибки
    };
  }
}
