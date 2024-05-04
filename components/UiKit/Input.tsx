import s from "./Input.module.scss";
import classNames from "classnames";

interface InputProps {
  value: string;
  name: string;
  placeholder: string;
  className?: string;
  width?: string;
  type?: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      className={s.input}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      autoComplete="off"
      onChange={onChange}
      required
    />
  );
};
