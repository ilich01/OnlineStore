import Link from "next/link";
import s from "./LoginForm.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, toggleForm } from "../../../store/slices/userSlice";
import { Input } from "../../UiKit/Input";

const UserSignUpFrom = ({ formClose, toggleCurrentFormType }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar:
      "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
  });
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(createUser(values) as any);
    formClose();
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.header}>
          <div className={s.title}>Sign Up</div>
          <div onClick={formClose}>
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
              type="name"
              name="name"
              placeholder="Your Full Name"
              value={values.name}
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
          <div className={s.group}></div>
          <div
            className={s.link}
            onClick={() => toggleCurrentFormType("login")}
          >
            Already have an account
          </div>
          <button className={s.submit} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default UserSignUpFrom;
