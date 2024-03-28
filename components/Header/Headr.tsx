import Link from "next/link";
import s from "./Header.module.scss";
const Header = () => {
  return (
    <div className={s.container}>
      <Link className={s.logo} href={"/"}>
        <img src="/icons/logo.svg" alt="" />
      </Link>
      <div className={s.navGroup}>
        <p>Discovery</p>
        <p>About</p>
        <p>Contuct Us</p>
      </div>
      <div className={s.iconsGrop}>
        <img src="/icons/profile.svg" alt="Profile" />
        <img src="/icons/cart.svg" alt="Cart" />
      </div>
    </div>
  );
};
export default Header;
