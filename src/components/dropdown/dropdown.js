import React, { useState } from 'react';
import styles from './dropdown.module.css'

function Dropdown({ options, placeholder }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange} className={styles.option1}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;


// import styles from './dropdown.module.css';

// export default function Dropdown({ options, name, placeholder, onChange }) {
//     return (
//         <select name={name} onChange={onChange} className={styles.dropdown}>
//             <option value="">{placeholder}</option>
//             {options.map(option => (
//                 <option key={option} value={option}>
//                     {option}
//                 </option>
//             ))}
//         </select>
//     );
// }