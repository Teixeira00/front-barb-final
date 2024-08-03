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


// export default function Dropdown({ options, placeholder }){
//   return (
//     <Autocomplete
//       // disablePortal
//       className={styles.option}
//       options={options}
      
//       renderInput={
//         (params) => 
//         <TextField {...params} 
//         sx={
//           {'& .MuiInputBase-root': {height: '45px'},
//             '& .MuiInputLabel-root': {
//               top: '13px',   // Ajuste a posição vertical do label
//               left: '30px',  // Ajuste a posição horizontal do label
//               transform: 'none',  // Desativa o comportamento padrão de flutuação do label
//               position: 'absolute', // Necessário para posicionar o label manualmente
//             },
//             '&.Mui-focused': {
//                 borderColor: '#ccc', // Cor da borda quando em foco
//                 boxShadow: 'none', // Remove a sombra de foco
//               }
//           }
//         }
//         label= "teste" 
//         />
//       }
//     />
//   );
// }

