import Link from "next/link";
import s from "./Header.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCartItems } from "../../store/slices/cartSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const cartItems = useSelector((state: any) => state.cart.items);

  useEffect(() => {
    setCartQuantity(cartItems.length);
  }, [cartItems]);

  return (
    <div className={s.container}>
      <Link className={s.logo} href={"/"}>
        <img src="/icons/logo.svg" alt="" />
      </Link>
      <div className={s.navGroup}>
        <Link href={"/products"}>
          <p>Products</p>
        </Link>
        <p>About</p>
        <p>Contuct Us</p>
      </div>
      <div className={s.iconsGrop}>
        <Link href={"/auth"}>
          <img src="/icons/profile.svg" alt="Profile" />
        </Link>
        <div className={s.quantity}>{cartQuantity}</div>
        <Link href={"/cart"}>
          <img src="/icons/cart.svg" alt="Cart" />
        </Link>
      </div>
    </div>
  );
};
export default Header;
