import { useDispatch } from "react-redux";
import s from "./Counter.module.scss";
import { addItem } from "../../../store/slices/cartSlice";
const Counter = ({ item, quantity }) => {
  const dispatch = useDispatch();
  const changeQuantity = (item, quantity) => {
    dispatch(addItem({ ...item, quantity }));
  };
  // const handleIncrement = () => {
  //   setQuantity((prevQuantity) => prevQuantity + 1); // Увеличение количества на 1
  // };

  // const handleDecrement = () => {
  //   if (quantity > 1) {
  //     setQuantity((prevQuantity) => prevQuantity - 1); // Уменьшение количества на 1 (если больше 1)
  //   }
  // };
  return (
    <>
      {/* <span className={s.title}>Quantity</span> */}
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
