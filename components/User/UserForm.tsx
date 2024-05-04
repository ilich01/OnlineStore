import { useSelector } from "react-redux";
import UserSignUpFrom from "./UserSignUpForm/UserSignUpForm";
import s from "./UserForm.module.scss";
import { useDispatch } from "react-redux";
import { toggleForm, toggleFormType } from "../../store/slices/userSlice";
import UserLoginForm from "./UserSignUpForm/UserLoginFrom";

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);
  const formClose = () => {
    dispatch(toggleForm(false));
  };
  const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));
  return showForm ? (
    <>
      <div className={s.bgc} onClick={formClose} />
      <div className={s.wrapper}>
        {formType === "signUp" ? (
          <UserSignUpFrom
            toggleCurrentFormType={toggleCurrentFormType}
            formClose={formClose}
          />
        ) : (
          <UserLoginForm
            toggleCurrentFormType={toggleCurrentFormType}
            formClose={formClose}
          />
        )}
      </div>
    </>
  ) : (
    <></>
  );
};
export default UserForm;
