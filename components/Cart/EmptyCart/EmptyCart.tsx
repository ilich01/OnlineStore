import Link from "next/link";
import s from "./EmtryCart.module.scss";
const EmptyCart = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>You cart is empty</h1>
      <Link href="/" className={s.button}>
        Go to shopping
      </Link>
    </div>
  );
};
export default EmptyCart;
