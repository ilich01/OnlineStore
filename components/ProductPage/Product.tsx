import { useState } from "react";
import s from "./Product.module.scss";
import Counter from "./Counter/Counter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";

const Product = ({ product }) => {
  const [status, setStatus] = useState("");
  console.log("Product component is rendering...");
  const curerentProduct = product.data.product;

  const cartItems = useSelector((state: any) => state.cart.items);
  const cartProduct = cartItems.find((item) => item.id === curerentProduct.id);
  const initialQuantity = cartProduct ? cartProduct.quantity : 1;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    setStatus("adding");
    console.log("добавляется");

    dispatch(
      addItem({
        id: curerentProduct.id,
        title: curerentProduct.title,
        image: curerentProduct.featuredImage,
        price: curerentProduct.variants.edges[0].node.price.amount,
      })
    );
    console.log("Current product:", curerentProduct);
    setStatus("inCart");
  };
  console.log("Product component is done...");
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
          {status == "inCart" ? (
            <Counter item={cartProduct} quantity={initialQuantity} />
          ) : (
            <button className={s.button} onClick={handleAddToCart}>
              {status == "adding" ? (
                <div>Loading</div>
              ) : (
                <>
                  <img
                    className={s.icon}
                    src="/icons/cart_white.svg"
                    alt="Cart"
                  />
                  + Add co cart
                </>
              )}
            </button>
          )}
          <div className={s.description}>{curerentProduct.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
