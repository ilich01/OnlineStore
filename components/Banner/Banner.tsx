import { Button } from "@mui/base";
import s from "./Banner.module.scss";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <img
          src="https://demostore.mock.shop/cdn/shop/files/DALL_E_2023-02-03_11.19.22_-_basketball_gym_5_1.png?v=1675445658&width=1500"
          alt=""
          className={s.image}
        />
        <div className={s.overlay}>
          <span className={s.title}>The Peak</span>
          <span className={s.title}>Collection</span>
          <span className={s.description}>
            Push your performance with our premium athletic wear
          </span>
          <Link href="/products">
            <button className={s.button}>Shop now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
