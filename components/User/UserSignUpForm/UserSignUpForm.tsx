import Link from "next/link";
import s from "./userSignUpForm.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, toggleForm } from "../../../store/slices/userSlice";

const UserSignUpFrom = ({ formClose }) => {
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
        <div className={s.close} onClick={formClose}>
          <img src="/icons/close.svg" alt="Cart" />
        </div>
        <div className={s.title}>SignUp</div>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.group}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={values.email}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div className={s.group}>
            <input
              type="name"
              name="name"
              placeholder="Your Full Name"
              value={values.name}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div className={s.group}>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={values.password}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div className={s.group}>
            <input
              type="avatar"
              name="avatar"
              placeholder="Your avatar"
              value={values.avatar}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div className={s.link}>
            <Link href="/"> I already have an account</Link>
          </div>
          <button className={s.submit} type="submit">
            Create an account
          </button>
        </form>
      </div>
    </>
  );
};

export default UserSignUpFrom;
