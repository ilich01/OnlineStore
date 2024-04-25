import React from "react";
import Modal from "react-modal";
import UserSignUpFrom from "./UserSignUpForm/userSignUpForm";
import s from "./UserForm.module.scss";

Modal.setAppElement("#root");

const UserFormMoadal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Form"
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <UserSignUpFrom />
      {/* <h1>MOADL IS OPEN</h1> */}
    </Modal>
  );
};

export default UserFormMoadal;
