import { useDispatch } from "react-redux";
import s from "./Counter.module.scss";
import { addItem } from "../../../store/slices/cartSlice";
const Counter = ({ item, quantity }) => {
  const dispatch = useDispatch();
  const changeQuantity = (item, quantity) => {
    dispatch(addItem({ ...item, quantity }));
  };
  return (
    <>
      <div className={s.quantity}>
        <button onClick={() => changeQuantity(item, Math.max(1, quantity - 1))}>
          -
        </button>
        <span className={s.quantity}>{quantity}</span>
        <button onClick={() => changeQuantity(item, Math.max(1, quantity + 1))}>
          +
        </button>
      </div>
    </>
  );
};
export default Counter;
