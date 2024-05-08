import s from "./LoginForm.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, setError } from "../../../store/slices/userSlice";
import { Input } from "../../UiKit/Input";
import { useSelector } from "react-redux";

const UserLoginForm = ({ formClose, toggleCurrentFormType }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const isLoading = useSelector((state: any) => state.user.isLoading);
  const errorMessage = useSelector((state: any) => state.user.error);
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const success = useSelector((state: any) => state.user.success); // Исправлено на success
  useEffect(() => {
    if (success) {
      formClose();
    }
  }, [success, formClose]);
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    await dispatch(loginUser(values) as any);
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
        {currentUser ? (
          <div>{currentUser.name}</div>
        ) : (
          <>
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
              {errorMessage && <span className={s.error}>{errorMessage}</span>}
              {isLoading && <span className={s.loading}>Loading...</span>}
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
          </>
        )}
      </div>
    </>
  );
};

export default UserLoginForm;
