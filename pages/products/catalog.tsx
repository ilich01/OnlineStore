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
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const products = await response.json();

  return {
    props: { products },
  };
}
