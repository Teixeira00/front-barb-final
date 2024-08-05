import styles from "./input.module.css"

export default function Input({ type, name, placeholder, pattern, title, value, onChange }) {
    return (
      <input className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        value={value}
        onChange={onChange} 
      />
    );
  }