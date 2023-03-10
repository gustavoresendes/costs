import React, { useState, useEffect } from "react";
import styles from "./Select.module.scss";

const Select = ({ text, name, options, handleOnChange, value }) => {
  const [selectedOption, setSelectedOption] = useState("default");

  useEffect(() => {
    setSelectedOption("default");
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    handleOnChange(event);
  };

  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleSelectChange}
        value={selectedOption || value || ''}
      >
        <option value="default" disabled>
          Selecione uma opção
        </option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
