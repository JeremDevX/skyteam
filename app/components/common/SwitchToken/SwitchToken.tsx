"use client";

import { useState } from "react";
import styles from "./SwitchToken.module.css";

interface SwitchTokenProps {
  initialState?: boolean;
  onChange?: (isOn: boolean) => void;
}

export default function SwitchToken({
  initialState = false,
  onChange,
}: SwitchTokenProps) {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onChange?.(newState);
  };

  return (
    <div className={styles.switchContainer} onClick={handleToggle}>
      <div className={`${styles.switchTrack} ${isOn ? styles.on : styles.off}`}>
        <div className={styles.switchKnob} />
        {isOn && <div className={styles.greenGlow} />}
      </div>
    </div>
  );
}
