import React from 'react';
import styles from './timeSelector.module.css';

export default function TimeSelector({ availableTimes, name, value, onChange }) {
  return (
    <select name={name} value={value} onChange={onChange} className={styles.timeSelector}>
      <option value="">Selecione um horário</option>
      {availableTimes.map((time, index) => (
        <option key={index} value={time}>
          {time}
        </option>
      ))}
    </select>
  );
}