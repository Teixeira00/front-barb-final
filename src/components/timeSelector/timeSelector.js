import React, { useState } from 'react';
import styles from './timeSelector.module.css'

const TimeSelector = ({ availableTimes, onChange }) => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleChange = (event) => {
    const newTime = event.target.value;
    setSelectedTime(newTime);
    if (onChange) {
      onChange(newTime);
    }
  };

  return (
    <select
      value={selectedTime}
      onChange={handleChange}
      className={styles.timeSelector}
    >
      <option value="" disabled>
        Selecione um horário
      </option>
      {availableTimes.map((time, index) => (
        <option key={index} value={time}>
          {time}
        </option>
      ))}
    </select>
  );
};

export default TimeSelector;


// export default function TimeSelector({ availableTimes, name, onChange }) {
//   return (
//       <select name={name} onChange={onChange}>
//           <option value="">Selecione o horário</option>
//           {availableTimes.map(time => (
//               <option key={time} value={time}>
//                   {time}
//               </option>
//           ))}
//       </select>
//   );
// }