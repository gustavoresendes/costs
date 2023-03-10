import React from "react";
import styles from "./Input.module.scss";

const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        onChange={handleOnChange}
        value={value}
        required
      />
    </div>
  );
};

export default Input;
