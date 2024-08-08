import React, { useState } from 'react';
import styles from './confirmation.module.css';

const Confirmation = ({ isOpen, onConfirm, onCancel, originalCnpj }) => {
    const [confirmationCnpj, setConfirmationCnpj] = useState('');
    const [error, setError] = useState('');

    const handleConfirm = () => {
        if (confirmationCnpj === originalCnpj) {
            onConfirm(); // Chama a função de confirmação passada por props
        } else {
            setError('O CNPJ de confirmação não corresponde ao CNPJ do cadastro.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Confirmar Exclusão</h2>
                <p>Digite o CNPJ para confirmar a exclusão do cadastro.</p>
                <input 
                    type="text" 
                    placeholder="Confirme o ID" 
                    value={confirmationCnpj} 
                    onChange={(e) => setConfirmationCnpj(e.target.value)} 
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
