import Link from "next/link";
import s from "./Cart.module.scss";
import { useSelector } from "react-redux";
import Counter from "../ProductPage/Counter/Counter";
import EmptyCart from "./EmptyCart/EmptyCart";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/slices/cartSlice";
import { toggleForm } from "../../store/slices/userSlice";
import { useState } from "react";
import Done from "./Done/Done";

const Cart = () => {
  const [success, setSuccess] = useState(false);
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const userAddress = currentUser?.userInfo;
  const dispatch = useDispatch();
  const openForm = () => {
    dispatch(toggleForm(true));
  };
  const removeItemFormCart = (item) => dispatch(removeItem(item));
  const cartItems = useSelector((state: any) => state.cart.items);
  const checkOut = () => {
    setSuccess(true);
    const itemIds = cartItems.map((item) => item.id);
    dispatch(removeItem(itemIds));
  };
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className={s.page_wrapper}>
      {success ? (
        <Done />
      ) : (
        <>
          {cartItems.length !== 0 ? (
            <>
              <div className={s.container}>
                <h2 className={s.title}>Your cart</h2>
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
                      <Link href={`/products/${encodeURIComponent(item.id)}`}>
                        <div className={s.title}>
                          <img className={s.mainImage} src={item.image.url} />
                          {item.title}
                        </div>
                      </Link>
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
                      <div className={s.total}>
                        ${item.price * item.quantity}
                      </div>
                    </div>
                    <div className={s.line}></div>
                  </>
                ))}
              </div>
              <div className={s.footer}>
                <div className={s.total}>
                  <span className={s.subTotal}>Subtotal</span>
                  <span className={s.sum}>${calculateTotal()}</span>
                </div>
                {currentUser ? (
                  userAddress ? (
                    <button className={s.button} onClick={checkOut}>
                      Check out
                    </button>
                  ) : (
                    <Link href="./auth">
                      <button className={s.button}>Check out</button>
                    </Link>
                  )
                ) : (
                  <button className={s.button} onClick={openForm}>
                    Check out
                  </button>
                )}
              </div>
            </>
          ) : (
            <EmptyCart />
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
