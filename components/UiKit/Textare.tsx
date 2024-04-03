import s from "./Textarea.module.scss";
import classNames from "classnames";

interface TextareaProps {
  placeholder: string;
  className?: string;
  width?: string;
  type?: string;
  required?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  width,
  type,
  required,
}) => {
  return (
    <input
      placeholder={placeholder}
      className={s.textarea}
      width={width}
      type={type}
      required={required}
    />
  );
};
