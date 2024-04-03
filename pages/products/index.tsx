import React from "react";
import Header from "../../components/Header/Headr";
import Catalog from "../../components/Catalog/Catalog";

const Products = ({ products }) => {
  const filteredProducts = products.filter((product) => {
    if (Array.isArray(product.images) && product.images.length > 0) {
      for (let i = 0; i < product.images.length; i++) {
        const image = product.images[i];

        if (
          typeof image === "string" &&
          image.startsWith("[") &&
          image.endsWith("]")
        ) {
          return false;
        }
      }

      return true;
    }

    return false;
  });
  return (
    <>
      <Header />
      <Catalog products={filteredProducts} />
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
