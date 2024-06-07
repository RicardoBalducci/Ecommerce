import React, { useState, useEffect } from "react";
import styles from "./css/reloj.module.css";

function Reloj({ language }: { language: string }) {
  interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const calculateTimeLeft = () => {
    const difference = +new Date("July 13, 2024") - +new Date(); // Reemplaza con la fecha deseada
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.Container}>
      <h1 className={styles.Titulo}>
        {language === "en" ? "Grand opening" : "Gran inauguración"}
      </h1>
      <p className={styles.p}>
        {language === "en"
          ? "It won't be long until the new online store"
          : "Ya no falta mucho para la nueva tienda en linea"}
      </p>

      <h1 className={styles.Titulo}>
        {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </h1>
      <h2 className={styles.p}>
        {language === "en"
          ? "Days:Hours:Minutes:Seconds"
          : "Días:Horas:Minutos:Segundos"}
      </h2>
    </div>
  );
}

export default Reloj;
