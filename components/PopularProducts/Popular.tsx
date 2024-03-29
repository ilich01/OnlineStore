import Card from "../Catalog/ProcuctCard/Card";
import s from "./Popular.module.scss";
const Popular = ({ products }) => {
  return (
    <div className={s.page_wrapper}>
      <h1>Popular Products</h1>
      <div className={s.container}>
        {products.slice(0, 8).map((product) => (
          <div key={product.id}>
            <Card product={product} />
          </div>
        ))}
        <div />
      </div>
    </div>
  );
};
export default Popular;
