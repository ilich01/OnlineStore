import { useState } from "react";
import s from "./Product.module.scss";
import Counter from "./Counter/Counter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";

const Product = ({ product }) => {
  const curerentProduct = product.data.product;
  // console.log(curerentProduct);
  const [quantity, setQuantity] = useState(1); // Состояние для количества товара
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Увеличение количества на 1
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1); // Уменьшение количества на 1 (если больше 1)
    }
  };
  const handleAddToCart = () => {
    dispatch(addItem({ id: curerentProduct.id, quantity }));
  };
  return (
    <div className={s.page_wrapper}>
      <img
        src={curerentProduct.featuredImage.url}
        alt="product image"
        width={520}
        height={433}
      />
      <div className={s.functionGroup}>
        <div className={s.title}>
          <h2>{curerentProduct.title}</h2>
        </div>
        <div className={s.group1}>
          <div className={s.price}>
            {curerentProduct.variants.edges[0].node.price.amount}$
          </div>
          <Counter
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            quantity={quantity}
          />
          <button className={s.button}>
            <img
              className={s.icon}
              src="/icons/cart_white.svg"
              alt="Cart"
              onClick={handleAddToCart}
            />
            + Add co cart
          </button>
          <div className={s.description}>{curerentProduct.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
