import Link from "next/link";
import s from "./Cart.module.scss";
import { useSelector } from "react-redux";
import Counter from "../ProductPage/Counter/Counter";
import EmptyCart from "./EmptyCart/EmptyCart";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const removeItemFormCart = (item) => dispatch(removeItem(item));
  const cartItems = useSelector((state: any) => state.cart.items);
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  return (
    <div className={s.page_wrapper}>
      {cartItems.length !== 0 ? (
        <>
          <div className={s.container}>
            <h2>Your cart</h2>
            <Link href="./">
              <span className={s.back}>Back to shopping</span>
            </Link>
          </div>
          <div className={s.productList}>
            <div className={s.header}>
              <span className={s.product}>Product</span>
              <span className={s.price}>Price</span>
              <span className={s.quantity}>Quantity</span>
              <span className={s.total}>Total</span>
            </div>
            <div className={s.line}></div>
            {cartItems.map((item) => (
              <>
                <div className={s.itmesBox}>
                  <div className={s.title}>
                    <img className={s.mainImage} src={item.image.url} />
                    {item.title}
                  </div>
                  <div className={s.price}>${item.price}</div>
                  <Counter quantity={item.quantity} item={item} />
                  <div
                    className={s.removeBox}
                    onClick={() => removeItemFormCart(item.id)}
                  >
                    <img
                      className={s.remove}
                      src="/icons/tarshbox.svg"
                      alt="remove"
                    />
                  </div>
                  <div className={s.total}>${item.price * item.quantity}</div>
                </div>
                <div className={s.line}></div>
              </>
            ))}
          </div>
          <div className={s.footer}>
            <span className={s.subTotal}>Subtotal</span>
            <span className={s.sum}>${calculateTotal()}</span>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
