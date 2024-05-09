import { useDispatch } from "react-redux";
import { Input } from "../../UiKit/Input";
import Selector from "../../UiKit/Selector";
import s from "./UserInfo.module.scss";
import { addUserInfo } from "../../../store/slices/userSlice";
import { useState } from "react";
import { useRouter } from "next/router";
const UserInfo = ({ countries }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    city: "",
    postalCode: "",
    province: "",
    country: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      city: formData.city,
      postalCode: formData.postalCode,
      province: formData.province,
      country: formData.country,
    };
    dispatch(addUserInfo(userInfo));
    router.push("./");
  };

  const countriesName = countries.data.map((country) => country.name);
  return (
    <div className={s.container}>
      <form className={s.formContainer} onSubmit={handleSubmit}>
        <div className={s.adress}>
          <h2 className={s.title}>Shipping adress</h2>
          <Input
            placeholder="City"
            width="small"
            value={formData.city}
            name="city"
            required
            onChange={handleChange}
          />
          <Input
            placeholder="Postal Code"
            width="small"
            type="number"
            value={formData.postalCode}
            name="postalCode"
            required
            onChange={handleChange}
          />
          <Input
            placeholder="Province"
            width="small"
            value={formData.province}
            name="province"
            required
            onChange={handleChange}
          />

          <Selector
            name="city"
            value={formData.city}
            options={countriesName}
            onSelect={(value) => {
              setFormData({
                ...formData,
                country: value,
              });
            }}
          />
          <button type="submit" className={s.submit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default UserInfo;
