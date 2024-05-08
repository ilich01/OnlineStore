import Link from "next/link";
import s from "./Header.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleForm } from "../../store/slices/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);
  const [cartQuantity, setCartQuantity] = useState(0);
  const cartItems = useSelector((state: any) => state.cart.items);
  const handldeClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
  };

  useEffect(() => {
    setCartQuantity(cartItems.length);
  }, [cartItems]);

  return (
    <div className={s.container}>
      <Link href={"/"}>
        <img className={s.logo} src="/icons/images/logo.gif" alt="" />
      </Link>
      <div className={s.navGroup}>
        <Link href={"/products"}>
          <p>Products</p>
        </Link>
        <p>About</p>
        <p>Contuct Us</p>
      </div>
      <div className={s.iconsGrop}>
        {currentUser ? (
          <Link href={"/auth"}>
            <div onClick={handldeClick}>
              <img src="/icons/profile.svg" alt="Profile" />
            </div>
          </Link>
        ) : (
          <div onClick={handldeClick}>
            <img src="/icons/profile.svg" alt="Profile" />
          </div>
        )}
        {cartItems.length === 0 ? (
          <div></div>
        ) : (
          <div className={s.quantity}>{cartQuantity}</div>
        )}
        <Link href={"/cart"}>
          <img src="/icons/cart.svg" alt="Cart" />
        </Link>
      </div>
    </div>
  );
};
export default Header;
