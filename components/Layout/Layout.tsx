import React from "react";
import UserForm from "../User/UserForm";
import Header from "../Header/Headr";

const useLayout = (WrappedComponent) => {
  return (props) => (
    <div>
      <UserForm />
      <Header />
      <WrappedComponent {...props} />
    </div>
  );
};

export default useLayout;
