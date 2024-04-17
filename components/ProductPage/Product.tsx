import { useState } from "react";
import s from "./Product.module.scss";
import Counter from "./Counter/Counter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";

const Product = ({ product }) => {
  const curerentProduct = product.data.product;
  const [quantity, setQuantity] = useState(1); // Состояние для количества товара
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: curerentProduct.id,
        title: curerentProduct.title,
        image: curerentProduct.featuredImage,
        price: curerentProduct.variants.edges[0].node.price.amount,
        quantity,
      })
    );
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
