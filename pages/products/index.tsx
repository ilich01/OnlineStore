import React from "react";
import Header from "../../components/Header/Headr";
import Catalog from "../../components/Catalog/Catalog";

const Products = ({ products }) => {
  return (
    <>
      <Header />
      <Catalog products={products} />
    </>
  );
};
export default Products;

export async function getStaticProps() {
  const response = await fetch(
    "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
  );
  const products = await response.json();

  return {
    props: { products },
  };
}
