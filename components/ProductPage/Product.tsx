import s from "./Product.module.scss";
const Product = ({ product }) => {
  return (
    <div className={s.page_wrapper}>
      <img
        src={product.images[0]}
        alt="product image"
        width={520}
        height={433}
      />
      <div className={s.functionGroup}>
        <div className={s.title}>{product.title}</div>
        <div className={s.group1}>
          <div className={s.price}>{product.price}</div>
          <div className={s.qty}></div>
        </div>
      </div>
    </div>
  );
};
export default Product;
