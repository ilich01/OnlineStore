import { useState } from "react";
import s from "./Product.module.scss";
import Counter from "./Counter/Counter";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1); // Состояние для количества товара

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Увеличение количества на 1
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1); // Уменьшение количества на 1 (если больше 1)
    }
  };

  return (
    <div className={s.page_wrapper}>
      <img
        src={product.images[0]}
        alt="product image"
        width={520}
        height={433}
      />
      <div className={s.functionGroup}>
        <div className={s.title}>
          <h2>{product.title}</h2>
        </div>
        <div className={s.group1}>
          <div className={s.price}>{product.price}$</div>
          <Counter
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            quantity={quantity}
          />
          <button className={s.button}>
            <img className={s.icon} src="/icons/cart_white.svg" alt="Cart" />+
            Add co cart
          </button>
          <div className={s.description}>{product.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
