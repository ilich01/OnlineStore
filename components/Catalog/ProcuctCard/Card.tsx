import Link from "next/link";
import s from "./Card.module.scss";
const Card = ({ product }) => {
  // const maxLength = 47;
  // let title = product.title;
  // if (title.length > maxLength) {
  //   title = title.substring(0, maxLength) + "...";
  // }
  return (
    <div className={s.container}>
      <Link href={`/products/${encodeURIComponent(product.node.id)}`}>
        <div className={s.imageCard}>
          <img
            key={product.id}
            src={product.node.featuredImage.url}
            alt="ProductName"
          />
        </div>
        <div className={s.productName}>{product.node.title}</div>
        <div className={s.price}>
          {product.node.variants.edges[0].node.price.amount}$
        </div>
      </Link>
    </div>
  );
};
export default Card;
