import Link from "next/link";
import s from "./Cart.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  updateItemQuantity,
  setCartItems,
} from "../../store/slices/cartSlice";
import Counter from "../ProductPage/Counter/Counter";

const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  // const updateQuantity = dispatch(updateItemQuantity())

  //   useEffect(() => {
  //     // Загрузка данных из локального хранилища при загрузке компонента
  //     const savedCart = localStorage.getItem("cart");
  //     if (savedCart) {
  //       dispatch(setCartItems(JSON.parse(savedCart)));
  //     }
  //   }, []);

  //   const cartItems =
  //     cartItemsFromStore.length > 0
  //       ? cartItemsFromStore
  //       : JSON.parse(localStorage.getItem("cart"));
  return (
    <div className={s.page_wrapper}>
      <div className={s.container}>
        <h2>Your cart</h2>
        <Link href="./">
          <span className={s.back}>Back to shopping</span>
        </Link>
      </div>
      <div className={s.productList}>
        <div className={s.header}>
          <span className={s.product}>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
        <div className={s.line}></div>
        {cartItems.map((item) => (
          <>
            <div className={s.itmesBox}>
              <img src={item.image.url} />
              <div className={s.title}>{item.title}</div>
              <div className={s.Price}>${item.price}</div>
              <Counter quantity={item.quantity} item={item} />
              <div className={s.total}>${item.price * item.quantity}</div>
            </div>
            <div className={s.line}></div>
          </>
        ))}
      </div>
      <div className={s.footer}>
        <span className={s.total}>Sub-total</span>
        <span className={s.sum}>$99.9</span>
      </div>
    </div>
  );
};

export default Cart;
