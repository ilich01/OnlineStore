import React from "react";
import styles from "./Loader.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src="/images/loading.gif" alt="" />
    </div>
  );
};

export default Loader;
