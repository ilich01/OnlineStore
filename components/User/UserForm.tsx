import { useSelector } from "react-redux";
import UserSignUpFrom from "./UserSignUpForm/UserSignUpForm";
import s from "./UserForm.module.scss";
import { useDispatch } from "react-redux";
import { toggleForm } from "../../store/slices/userSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm } = useSelector(({ user }) => user);
  const formClose = () => {
    dispatch(toggleForm(false));
  };
  return showForm ? (
    <>
      <div className={s.bgc}>
        <div className={s.wrapper}>
          <UserSignUpFrom formClose={formClose} />
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};
export default UserForm;
