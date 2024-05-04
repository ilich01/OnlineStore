import s from "./LoginForm.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createUser,
  loginUser,
  toggleForm,
} from "../../../store/slices/userSlice";
import { Input } from "../../UiKit/Input";

const UserLoginForm = ({ formClose, toggleCurrentFormType }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(loginUser(values) as any);
    formClose();
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.header}>
          <div className={s.title}>Sign In</div>
          <div className={s.close} onClick={formClose}>
            <img className={s.close} src="/icons/close.svg" alt="Cart" />
          </div>
        </div>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.group}>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={s.group}>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              value={values.password}
              onChange={handleChange}
              required
            />
          </div>
          <div
            className={s.link}
            onClick={() => toggleCurrentFormType("signUp")}
          >
            Create new account
          </div>
          <button className={s.submit} type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default UserLoginForm;
