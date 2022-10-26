import React, { useState } from "react";
import styles from "./weatherForm.module.css";

export const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");

  function onChange(e) {
    const value = e.target.value;
    setCity(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input type="text" onChange={onChange} className={styles.input} />
    </form>
  );
};
