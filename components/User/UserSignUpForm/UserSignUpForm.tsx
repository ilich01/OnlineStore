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
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear any previous errors when input changes
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorsCopy = { ...errors };
    let hasError = false;

    if (!values.name.trim()) {
      errorsCopy.name = "Name is required";
      hasError = true;
    }

    if (!values.email.trim()) {
      errorsCopy.email = "Email is required";
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errorsCopy.email = "Invalid email address";
      hasError = true;
    }

    if (!values.password.trim()) {
      errorsCopy.password = "Password is required";
      hasError = true;
    } else if (!/^[a-zA-Z0-9]+$/.test(values.password)) {
      errorsCopy.password = "Password can only contain letters and numbers";
      hasError = true;
    } else if (values.password.length < 4) {
      errors.password = "Password must be at least 4 characters";
    }

    setErrors(errorsCopy);

    if (hasError) {
      return;
    }

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
            {errors.email && <span className={s.error}>{errors.email}</span>}
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
            {errors.name && <span className={s.error}>{errors.name}</span>}
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
            {errors.password && (
              <span className={s.error}>{errors.password}</span>
            )}
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
