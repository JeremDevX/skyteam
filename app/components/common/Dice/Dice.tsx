"use client";

import { useState } from "react";
import styles from "./Dice.module.css";

export default function Dice() {
  const [diceValues, setDiceValues] = useState<number[]>([1, 1, 1, 1]);
  const [isRolling, setIsRolling] = useState<boolean>(false);

  const generateRandomDiceValues = () =>
    Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);

  const rollAllDice = () => {
    if (isRolling) return;

    setIsRolling(true);
    let rolls = 0;
    const maxRolls = 10;

    const interval = setInterval(() => {
      setDiceValues(generateRandomDiceValues());
      rolls++;

      if (rolls >= maxRolls) {
        clearInterval(interval);
        setDiceValues(generateRandomDiceValues());
        setIsRolling(false);
      }
    }, 100);
  };

  return (
    <div className={styles.container}>
      <div className={styles.diceGrid}>
        {diceValues.map((value, index) => (
          <div
            key={index}
            className={`${styles.dice} ${isRolling ? styles.rolling : ""}`}
            role="img"
            aria-label={`Dé ${index + 1} affichant ${value}`}
          >
            <span className={styles.value}>{value}</span>
          </div>
        ))}
      </div>
      <button
        className={styles.rollButton}
        onClick={rollAllDice}
        disabled={isRolling}
        aria-label="Lancer les dés"
      >
        {isRolling ? "Lancement..." : "Lancer les dés"}
      </button>
    </div>
  );
}
