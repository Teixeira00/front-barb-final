import React from 'react';
import styles from './dropdown.module.css';

export default function Dropdown({ options, placeholder, name, value, onChange }) {
  return (
    <select name={name} value={value} onChange={onChange} className={styles.option1}>
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}