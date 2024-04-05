import Card from "../Catalog/ProcuctCard/Card";
import s from "./Popular.module.scss";
const Popular = ({ products }) => {
  const productInfo = products.data.products.edges;
  return (
    <div className={s.page_wrapper}>
      <h1>Popular Products</h1>
      <div className={s.container}>
        {productInfo.slice(0, 8).map((product) => (
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
