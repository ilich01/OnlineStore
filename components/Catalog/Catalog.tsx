import s from "./Catalog.module.scss";
import Card from "./ProcuctCard/Card";
const Catalog = ({ products }) => {
  return (
    <div className={s.page_wrapper}>
      <h1>Products</h1>
      <div className={s.container}>
        {products.map((product) => (
          <div key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Catalog;
