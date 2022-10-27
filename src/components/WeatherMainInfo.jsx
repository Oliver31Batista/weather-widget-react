import React from "react";
import styles from "./weatherMainInfo.module.css";

export const WeatherMainInfo = ({ weather }) => {
  return (
    <div className={styles.mainInfo}>
      <div
        className={
          weather?.current.temp_c > 30
            ? styles.bgContainerVeryHot
            : weather?.current.temp_c > 20
            ? styles.bgContainerWarm
            : weather?.current.temp_c > 10
            ? styles.bgContainerCold
            : weather?.current.temp_c < 10
            ? styles.bgContainerSnow
            : styles.bgContainerCold
        }
      >
        <div className={styles.city}>{weather?.location.name}</div>
        <div className={styles.country}>{weather?.location.country}</div>
        <div className={styles.row}>
          <div>
            <img
              src={`http:${weather?.current.condition.icon}`}
              width="128"
              alt={weather?.current.condition.text}
            />
          </div>
          <div className={styles.weatherConditions}>
            <div className={styles.condition}>
              {weather?.current.condition.text}
            </div>
            <div className={styles.current}>{weather?.current.temp_c}°</div>
          </div>
        </div>
      </div>
      <iframe
        title="map"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20123.265672124126!2d${weather?.location.lon}1!3d${weather?.location.lat}4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sdo!4v1666709574587!5m2!1ses-419!2sdo`}
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
