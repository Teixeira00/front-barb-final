import React, { useState } from 'react';
import styles from './confirmation.module.css';

const Confirmation = ({ isOpen, onConfirm, onCancel, originalCpf }) => {
    const [confirmationCpf, setConfirmationCpf] = useState('');
    const [error, setError] = useState('');

    const handleConfirm = () => {
        if (confirmationCpf === originalCpf) {
            onConfirm(); // Chama a função de confirmação passada por props
        } else {
            setError('O CPF de confirmação não corresponde ao CPF do agendamento.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Confirmar Exclusão</h2>
                <p>Digite o CPF para confirmar a exclusão do agendamento.</p>
                <input 
                    type="text" 
                    placeholder="Confirme o CPF" 
                    value={confirmationCpf} 
                    onChange={(e) => setConfirmationCpf(e.target.value)} 
                />
                {error && <p className={styles.errorMessage}>{error}</p>}
                <div className={styles.buttonContainer}>
                    <button onClick={handleConfirm} className={styles.confirmButton}>Confirmar</button>
                    <button onClick={onCancel} className={styles.cancelButton}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;