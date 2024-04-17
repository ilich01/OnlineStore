import s from "./Catalog.module.scss";
import Card from "./ProcuctCard/Card";
const Catalog = ({ products }) => {
  console.log("productList:", products);
  const productInfo = products.data.products.edges;
  return (
    <div className={s.page_wrapper}>
      <h1>Products</h1>
      <div className={s.container}>
        {productInfo.map((product) => (
          <div key={products.id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Catalog;
