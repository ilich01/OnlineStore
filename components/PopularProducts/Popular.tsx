import Card from "../Catalog/ProcuctCard/Card";
import s from "./Popular.module.scss";
const Popular = ({ products }) => {
  const productInfo = products.data.products.edges;
  const shuffledProducts = productInfo.sort(() => Math.random() - 0.5);
  const selectedProducts = shuffledProducts.slice(0, 8);
  return (
    <div className={s.page_wrapper}>
      <p className={s.description}>New arrivals</p>
      <h1 className={s.title}>Spring '24</h1>
      <div className={s.container}>
        {selectedProducts.map((product) => (
          <div key={product.id}>
            <Card product={product} key={product.id} />
          </div>
        ))}
        <div />
      </div>
    </div>
  );
};
export default Popular;
