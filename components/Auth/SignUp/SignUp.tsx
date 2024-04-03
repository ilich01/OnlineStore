import Selector from "../../UiKit/Selector";
import { Textarea } from "../../UiKit/Textare";
import s from "./SignUp.module.scss";
const SignUp = ({ countries }) => {
  const countriesName = countries.data.map((country) => country.name);
  return (
    <div className={s.container}>
      <form className={s.formContainer}>
        <h2>Contact</h2>
        <Textarea
          placeholder="Email or mobile phone"
          width="large"
          type="email"
          required
        />
        <div className={s.personalInfo}>
          <h2>Shipping adress</h2>
          <div className={s.fullname}>
            <Textarea placeholder="Name" width="medium" />
            <Textarea placeholder="Second Name" width="medium" />
          </div>
          <div className={s.adress}>
            <Textarea placeholder="City" width="small" />
            <Textarea placeholder="Postal Code" width="small" type="number" />
            <Textarea placeholder="Province" width="small" />
            {/* <Selector options={countriesName} onSelect={undefined} /> */}
          </div>
          {/* <Textarea placeholder="Country/region" width="large" /> */}
          <Selector options={countriesName} onSelect={undefined} />
        </div>
      </form>
    </div>
  );
};
export default SignUp;
