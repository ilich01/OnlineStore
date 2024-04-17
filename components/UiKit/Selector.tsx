import React, { useState, useEffect } from "react";
import s from "./Selector.module.scss";
const Selector = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleChange}
      className={s.selector}
    >
      <option value="">
        <span className={s.placeholder}>Country</span>
      </option>
      {options.map((option) => (
        <option key={option.code} value={option.code}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Selector;
