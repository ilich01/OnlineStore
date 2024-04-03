import s from "./Counter.module.scss";
const Counter = ({ handleDecrement, handleIncrement, quantity }) => {
  return (
    <>
      <span className={s.title}>Quantity</span>
      <div className={s.quantity}>
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </>
  );
};
export default Counter;
