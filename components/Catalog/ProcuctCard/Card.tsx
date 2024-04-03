import Link from "next/link";
import s from "./Card.module.scss";
const Card = ({ product }) => {
  const maxLength = 47;
  let title = product.title;
  if (title.length > maxLength) {
    title = title.substring(0, maxLength) + "...";
  }
  return (
    <div className={s.container}>
      <Link href={`products/${product.id}`}>
        <div className={s.imageCard}>
          <img key={product.id} src={product.images[0]} alt="ProductName" />
        </div>
        <div className={s.productName}>{title}</div>
        <div className={s.price}>{product.price}$</div>
      </Link>
    </div>
  );
};
export default Card;
