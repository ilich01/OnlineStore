import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Headr";
import Catalog from "../../components/Catalog/Catalog";
import useLayout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";

const Products = ({ products }) => {
  const [loading, setLoading] = useState(true); // Устанавливаем начальное значение состояния загрузки в true

  useEffect(() => {
    // Функция для загрузки данных
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
        );
        const products = await response.json();
        setLoading(false); // После успешной загрузки данных устанавливаем состояние загрузки в false
        return products;
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // В случае ошибки также устанавливаем состояние загрузки в false
        return [];
      }
    };

    fetchData(); // Вызываем функцию загрузки данных
  }, []); // Пустой массив зависимостей, чтобы useEffect сработал только при монтировании компонента

  return (
    <>
      {/* Отображаем индикатор загрузки, пока loading === true */}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Catalog products={products} />
        </>
      )}
    </>
  );
};

export default useLayout(Products);

export async function getStaticProps() {
  // Получение данных из API
  const response = await fetch(
    "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
  );
  const products = await response.json();

  return {
    props: { products }, // Передача полученных данных в props компонента
  };
}
