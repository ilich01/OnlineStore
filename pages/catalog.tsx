import React from "react";
import Header from "../components/Header/Headr";

const Products = ({ products }) => {
  return (
    <>
      <Header />
      <h1>Popular products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
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
